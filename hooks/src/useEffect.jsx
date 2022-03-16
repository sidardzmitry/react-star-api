import React, { useState, useEffect, useCallback
, useMemo } from "react";

const HookEffect = () => {

  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div style={{backgroundColor: 'blue', padding: 10}}>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        {/* <HookCounter value={value}/>
        <Notification /> */}
        <PlanetInfo id={value}/>
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>;
  }
};

const getPlanet = (id) => {
  return fetch(`http://swapi.dev/api/planets/${id}/`)
  .then(res => res.json())
  .then(data => data)
};

const useRequest = (request) => {

  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), []);

  const [ dataState, setDataState ] = useState(initialState);

  useEffect(() => {
    setDataState(initialState);

    let cancelled = false
    request()
    .then(data => !cancelled && setDataState({
      data,
      loading: false,
      error: null
    }))
    .catch(error => !cancelled && setDataState({
      data: null,
      loading:false,
      error
    }))
    return () => cancelled = true;
  }, [ request, initialState ]);

  return dataState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(
    () => getPlanet(id), [id]);
  return useRequest(request);
};

const PlanetInfo = ({id}) => {

 const {data, loading, error} = usePlanetInfo(id);

 if(error) {
   return <div>Something is wrong</div>
 }
 if(loading) {
   return <div>Loading...</div>
 }

  return(
    <div>{id} - {data.name}</div>
  );
};

// const HookCounter = ({value}) => {

//     useEffect(() => {
//         console.log('mount');
//         return() => console.log('unmount');
//     }, []);
        
//     useEffect(() => console.log('update'));
//     // useEffect(() => () => console.log('unmount'), []);

//     return(
//         <div>
//             <p>{value}</p>
//         </div>
//     )
// };

// const Notification = () => {
//     const [ visible, setVisible ] = useState(true);

//     useEffect(() => {
//         const timeout = setTimeout(
//             () => setVisible(false), 3500);
//             return () => clearTimeout(timeout);
//     },[]);

//     return (
//         <div style={{backgroundColor: 'gray', padding: 10}}>
//             { visible && <p>Hello World</p> }
//         </div>
//     )
// };

export default HookEffect;