import React from "react";

import {setGrid, Execute} from './functions';

function Mars(props) {
  const [path, setPath] = React.useState("")

  const Canvas = React.useRef(null);
  
  const EXAMPLE_INSTRCUTION = [ "3 3 E|MMRMMRMRRM", "1 2 N|LMLMLMMMLMM", "3 2 E|MMMMMMMMMMLMMMLMM", "4 2 E|MMMMLMMMMLMMMLMLM", "7 2 N|MMRMMRMMMLMMML"]
  let mars_plan = Canvas.current
  let global_count = 0
  let exe
  React.useEffect(() => {
    let mars_plan = Canvas.current
    setGrid(mars_plan)
  },[])

  const Movement = ()=>{
    let path_str = path
    Execute(path_str, mars_plan, props)
  }

  const MultExecute = ()=>{
    console.log(EXAMPLE_INSTRCUTION)
    exe = setInterval(Excute, 1000);
  }

  const Excute = () => { 
    if(global_count > EXAMPLE_INSTRCUTION.length-1){
      clearInterval(exe)  
      alert("All commands are finished")
      window.location.reload();
    }
    console.log("this is global_count:", global_count, EXAMPLE_INSTRCUTION.length)
    setPath(EXAMPLE_INSTRCUTION[global_count])
    Execute(EXAMPLE_INSTRCUTION[global_count], mars_plan, props)
    global_count++

  } 

  const Path = (e)=>{
    setPath(e.target.value)
  }

  const Initialize = ()=>{
    window.location.reload();
  }

  return(
    <div>
      <button onClick={MultExecute} className="btn-style">Multi Execute</button>
      <button onClick={Movement} className="btn-style">Execute</button>
      <button onClick={Initialize} className="btn-style">Initialize</button>
      <input  className="btn-style" placeholder="input the path" type="text" onChange={(e)=>{Path(e)}} value={path}/>
      <div className="spacing"></div>
      <canvas ref={Canvas} width="1200" height="500"></canvas>
    </div>
  );
}
export default Mars;
