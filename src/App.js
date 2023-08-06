import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black'
    document.body.style.color='white'

  }
  if(mode==='dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
  }
}
const [color, setColor] = useState('primary')
const changeColor=(x)=>{
  setColor(x)
}
  return (
   <>
   <NavBar mode={mode}  toggle={toggleMode} color={color} changeColor={changeColor}/>
   
   <TextBox  toggle={toggleMode} mode={mode} color={color}/>
   
   </>
  );
}

export default App;
