import React, {useState} from "react";


const HookSwitcher = () => {
    const [color, setColor] = useState('orange');
    const [fontSize, setFontSize] = useState(14);

    return(
      <div style={{padding: 20, backgroundColor: color, fontSize: fontSize}}>
      Hello World
        <button 
        onClick={() => setColor('red')}
        >RED</button>
        <button 
        onClick={() => setColor('blue')}
        >BLUE</button>
        <button 
        onClick={() => setFontSize((s) => s + 2)}
        >fontSize</button>
      </div>
    )
}

export default HookSwitcher;