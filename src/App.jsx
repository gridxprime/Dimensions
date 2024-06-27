import React, {useState} from 'react'
import './App.css'

function App() {

  const [dimensions, setDimensions] = useState({width: 0, height: 0})

  const handleClickButton = () => {setDimensions({
    width: window.innerWidth,
    height: window.innerHeight,
  })}

  return (
    <section className='home'>
      <div className="main">
      <span>On this page you can find out what's height and width on your browser</span>
      <div className="dimensions">
        <span className='height'>Height: <b>{dimensions.height}</b></span>
        <span className='width'>WIdth: <b>{dimensions.width}</b></span>
      </div>
      <button onClick={handleClickButton} className='start'>
        Start
      </button>
      </div>
    </section>
  )
}

export default App