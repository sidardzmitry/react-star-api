import React, {useContext} from "react";
import MyContext from "./index";

const Child = () => {
    const value = useContext(MyContext)
    return(
        <div style={{backgroundColor:'red', padding: 10}}>
            <p>{value}</p>
        </div>
    )
}

export default Child;
