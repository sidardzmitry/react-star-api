import React, { useState, useEffect } from "react";

const HookEffect = () => {

  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div style={{backgroundColor: 'blue', padding: 10}}>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        <HookCounter value={value}/>
        <Notification />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>;
  }
};



const HookCounter = ({value}) => {

    useEffect(() => {
        console.log('mount');
        return() => console.log('unmount');
    }, []);
        
    useEffect(() => console.log('update'));
    // useEffect(() => () => console.log('unmount'), []);


    return(
        <div>
            <p>{value}</p>
        </div>
    )
};

const Notification = () => {
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(
            () => setVisible(false), 3500);
            return () => clearTimeout(timeout);
    },[]);

    return (
        <div style={{backgroundColor: 'gray', padding: 10}}>
            { visible && <p>Hello World</p> }
        </div>
    )
}

export default HookEffect;