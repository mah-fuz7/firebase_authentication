import { useState } from "react";
import MyContainer from "../components/MyContainer";

const Test = () => {
    const [count, setCount]=useState(0)
    const handleCount = () =>{
        setCount(count+1)
    }
    return (
       <MyContainer>
        <button className="btn bg-black text-white" onClick={handleCount}>HIT ME!!❌{count} time </button>
       </MyContainer>
    );
};

export default Test;