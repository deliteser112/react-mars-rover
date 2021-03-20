let global_val = 1
export function Execute(path, mars_plan, props) {
  global_val = 0
  setGrid(mars_plan)

  const x0 = 50
  const y0 = 450

  let r_direction = "N"
  let r_step_x = 0
  let r_step_y = 0

  let path_str = path
  let path_s
  if(path_str === "") path_str = "0 0 N|R"
  let temp_r = path_str.split(' ')

  let temp_s = temp_r[2].split('|')
  r_direction = temp_s[0]

  r_step_x = x0 + Number(temp_r[0])*50
  r_step_y = y0 - Number(temp_r[1])*50

  let ctx = mars_plan.getContext("2d");

  ctx.lineWidth = 5
  ctx.fillStyle = "white"
  ctx.beginPath();
  ctx.arc(r_step_x, r_step_y, 25, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "white"

  switch(r_direction){
    case "N": ctx.moveTo(r_step_x, r_step_y-40); ctx.lineTo(r_step_x-10, r_step_y-25); ctx.lineTo(r_step_x+10, r_step_y-25);ctx.fill(); break;
    case "S": ctx.moveTo(r_step_x, r_step_y+40); ctx.lineTo(r_step_x-10, r_step_y+25); ctx.lineTo(r_step_x+10, r_step_y+25);ctx.fill(); break;
    case "W": ctx.moveTo(r_step_x-40, r_step_y); ctx.lineTo(r_step_x-25, r_step_y-10); ctx.lineTo(r_step_x-25, r_step_y+10);ctx.fill(); break;
    case "E": ctx.moveTo(r_step_x+40, r_step_y); ctx.lineTo(r_step_x+25, r_step_y-10); ctx.lineTo(r_step_x+25, r_step_y+10);ctx.fill(); break;
    default: break;
  }

  path_s = temp_s[1]

  ctx.beginPath();
  ctx.lineWidth = 10
  ctx.fillStyle = "white"

  for(let i = 0; i < path_s.length; i++){
    console.log(path_s[i], r_direction)

    if(path_s[i] === "R"){
      switch(r_direction){
        case "N": r_direction = "E"; break;
        case "S": r_direction = "E"; break;
        case "W": r_direction = "N"; break;
        case "E": r_direction = "S"; break;
        default: break;
      }
    }else if(path_s[i] === "L"){
      switch(r_direction){
        case "N": r_direction = "W"; break;
        case "S": r_direction = "E"; break;
        case "W": r_direction = "S"; break;
        case "E": r_direction = "N"; break;
        default: break;
      }
    }else if(path_s[i] === "M"){
      switch(r_direction){
        case "N": ctx.beginPath(); ctx.strokeStyle = "yellow"; ctx.lineWidth = 1; ctx.moveTo(r_step_x, r_step_y); r_step_y -= 50; ctx.lineTo(r_step_x, r_step_y-1);ctx.stroke(); break;
        case "S": ctx.beginPath(); ctx.strokeStyle = "yellow"; ctx.lineWidth = 1; ctx.moveTo(r_step_x, r_step_y); r_step_y += 50; ctx.lineTo(r_step_x, r_step_y+1);ctx.stroke(); break;
        case "W": ctx.beginPath(); ctx.strokeStyle = "yellow"; ctx.lineWidth = 1; ctx.moveTo(r_step_x, r_step_y); r_step_x -= 50; ctx.lineTo(r_step_x-1, r_step_y);ctx.stroke(); break;
        case "E": ctx.beginPath(); ctx.strokeStyle = "yellow"; ctx.lineWidth = 1; ctx.moveTo(r_step_x, r_step_y); r_step_x += 50; ctx.lineTo(r_step_x+1, r_step_y);ctx.stroke(); break;
        default: break;
      }

      console.log(r_step_x, r_step_y, r_direction)

      if((0>r_step_x || r_step_x>1200) || (0>r_step_y || r_step_y>500)){
        alert("Out of boundaries!")
        return
      }else{
        props.setCurrentX(r_step_x)
        props.setCurrentY(r_step_y)
        props.setCurrentDirection(r_direction)
      }
      
    }
  }

  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.fillStyle = "rgb(73, 189, 189)";
  ctx.arc(r_step_x, r_step_y, 25, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "rgb(73, 189, 189)"

  switch(r_direction){
    case "N": ctx.moveTo(r_step_x, r_step_y-40); ctx.lineTo(r_step_x-10, r_step_y-25); ctx.lineTo(r_step_x+10, r_step_y-25);ctx.fill(); break;
    case "S": ctx.moveTo(r_step_x, r_step_y+40); ctx.lineTo(r_step_x-10, r_step_y+25); ctx.lineTo(r_step_x+10, r_step_y+25);ctx.fill(); break;
    case "W": ctx.moveTo(r_step_x-40, r_step_y); ctx.lineTo(r_step_x-25, r_step_y-10); ctx.lineTo(r_step_x-25, r_step_y+10);ctx.fill(); break;
    case "E": ctx.moveTo(r_step_x+40, r_step_y); ctx.lineTo(r_step_x+25, r_step_y-10); ctx.lineTo(r_step_x+25, r_step_y+10);ctx.fill(); break;
    default: break;
  }
}

export function setGrid(c){

    let ctx = c.getContext("2d")

    ctx.clearRect(0, 0, c.width, c.height)
    
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.setLineDash([20, 5]);
    ctx.strokeStyle = "grey";

    let xi=0, yi=0, step=50
    for(let i = 0; i < 15; i++){
      xi = i*step
      yi = i*step
      ctx.moveTo(0, xi);
      ctx.lineTo(1200, yi);
    }

    for(let i = 0; i < 60; i++){
      xi = i*step
      yi = i*step
      ctx.moveTo(xi, 0);
      ctx.lineTo(yi, 600);
    }
    
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.setLineDash([]);
   
    ctx.stroke();
    ctx.closePath();

    /////////// draw mars
    if(global_val > 0){
      ctx.lineWidth = 5
      ctx.fillStyle = "white"
      ctx.beginPath();
      ctx.arc(50, 450, 25, 0, 2 * Math.PI);
      ctx.fill();

      let r_step_x = 50, r_step_y = 450, r_direction="N"
      ctx.beginPath();
      ctx.fillStyle = "white"
    
      switch(r_direction){
        case "N": ctx.moveTo(r_step_x, r_step_y-40); ctx.lineTo(r_step_x-10, r_step_y-25); ctx.lineTo(r_step_x+10, r_step_y-25);ctx.fill(); break;
        case "S": ctx.moveTo(r_step_x, r_step_y+40); ctx.lineTo(r_step_x-10, r_step_y+25); ctx.lineTo(r_step_x+10, r_step_y+25);ctx.fill(); break;
        case "W": ctx.moveTo(r_step_x-40, r_step_y); ctx.lineTo(r_step_x-25, r_step_y-10); ctx.lineTo(r_step_x-25, r_step_y+10);ctx.fill(); break;
        case "E": ctx.moveTo(r_step_x+40, r_step_y); ctx.lineTo(r_step_x+25, r_step_y-10); ctx.lineTo(r_step_x+25, r_step_y+10);ctx.fill(); break;
        default: break;
      }
    }
    

}
  