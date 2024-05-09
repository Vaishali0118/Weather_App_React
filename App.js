import { useState } from 'react';
import './App.css';
function App() {

  let [city,setCity]=useState('')
  let[wdetail,setWdetail]=useState()
  let getdata=(event)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b5227eb415d8925187dc818bdeba0098&units=metric`)
    .then((res)=>res.json())
    .then((finalres)=>{
      if(finalres.cod="404"){
        setWdetail(undefined)
      }else{
        setWdetail(finalres)
      }
    })

    event.preventDefault()
    setCity('')
  }
  return (
    <div className="back">
      <div className='backin'>
      <h1>Simple Weather App</h1>
      <form onSubmit={getdata}>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='typedata' placeholder='City Name'/><button>submit</button>
      </form>
      <div className='box'>
        {
        wdetail!==undefined
        ?
        <>
        <h3 className='h3tag'>{wdetail.name} <span>{wdetail.sys.country}</span></h3>
        <h2 className='h2tag'>
          {wdetail.main.temp}
        </h2>
        <img src={`https://openweathermap.org/img/w/${wdetail.weather[3].icon}.png`}/>
        <p>{wdetail.weather[0].description}</p>
        </>
        :
        "No data found"
        }
        
      </div>
      </div>
    </div>
  );
}

export default App;
