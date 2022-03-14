import React, { useState } from "react";
import ReactDOM from "react-dom";
import HookSwitcher from "./useState";
import Child from "./useContext";
import HookEffect from "./useEffect";

const MyContext = React.createContext();
export default MyContext;

const App = () => {
  return (
    <div>
      <HookSwitcher />
      <MyContext.Provider value="Hello World 2022">
        <Child />
      </MyContext.Provider>
      <HookEffect />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
