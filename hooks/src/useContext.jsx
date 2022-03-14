import React, {useContext} from "react";
import MyContext from "./index";

const Child = () => {
    const value = useContext(MyContext)

    return(
        <p>{value}</p>
    )
}

export default Child;
