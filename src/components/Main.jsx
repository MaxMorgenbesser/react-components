import React from "react";
import {useState} from 'react'

function Main(){
    const [count,setCount]=useState(0)
    const handleClick = () => {setCount(count+1)}
    
    return (<main><h2>Main Section here 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem molestias totam consectetur officia aspernatur enim dolor placeat repellendus! Blanditiis hic voluptates sint explicabo odit aliquam consectetur, facilis quia maiores?</p></h2>
    <h3>Counter: {count}</h3>
    <button onClick={handleClick}>Click Me!</button></main>)
}


export default Main;