import { useRef } from 'react'

import './App.css'
import Child from './Child';

const App = () => {

  const buttonRef = useRef();
  const childRef = useRef();

  const handleClick = () => {
    buttonRef.current.innerText = "Clicked!";
    buttonRef.current.style.backgroundColor = "green";
    childRef.current.changeText('New Text!');
  }

  return (
    <>
      <button ref={buttonRef} onClick={handleClick}>
        Click me !
      </button>
      <Child ref={childRef}/>
    </>
  )
}

export default App
