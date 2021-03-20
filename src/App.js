// eslint-disable-next-line
import React, {useRef} from 'react';

import Papa from 'papaparse';

import Compass from './components/compass';
import Mars from './components/mars';
import Status from './components/status';
import './App.css';

function App() {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)
  const [data, setData] = React.useState([])
  const [direction, setDirection] = React.useState("N")


  React.useEffect(() => {
    getCsvData();
  },[])

  const getData = (result)=>{
    setData(result.data);
  }

  const fetchCsv = ()=>{
    return fetch('/data/data.csv').then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');
      console.log(response)
      return reader.read().then(function (result) {
        console.log("My data:", result.data)
          return decoder.decode(result.value);
      });
    });
  }

  const getCsvData = async () => {
    let csvData = await fetchCsv();
    Papa.parse(csvData, {
        complete: getData
    });
  }

  return(
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>Mars Rover</h1>
          <div className="status">
            <Compass/>
            <Status currentX={x} currentY={y} currentDirection={direction}/>
          </div>
          <Mars setCurrentX = {setX} setCurrentY = {setY} setCurrentDirection = {setDirection}/>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
