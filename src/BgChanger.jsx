import { useState } from "react";

function BgChanger() {
    const [color, setColor] = useState("black")

    
  return (
    <>
    <div className="w-full h-screen duration-300 " style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white  px-3 py-3 rounded-2xl">
                <button onClick={() => setColor("red")} className="outline-none px-4 py-2 rounded-2xl cursor-pointer" style={{backgroundColor: "red"}}>Red</button>
                <button onClick={() => setColor("blue")} className="outline-none px-4 py-2 rounded-2xl cursor-pointer" style={{backgroundColor: "blue"}}>Blue</button>
                <button onClick={() => setColor("yellow")} className="outline-none px-4 py-2 rounded-2xl cursor-pointer" style={{backgroundColor: "yellow"}}>Yellow</button>
                <button onClick={() => setColor("green")} className="outline-none px-4 py-2 rounded-2xl cursor-pointer" style={{backgroundColor: "green"}}>Green</button>
                <button onClick={() => setColor("gray")} className="outline-none px-4 py-2 rounded-2xl cursor-pointer" style={{backgroundColor: "gray"}}>Gary</button>
                <button onClick={() => setColor("black")} className="outline-none px-4 py-2 rounded-2xl cursor-pointer" style={{backgroundColor: "black"}}>Black</button>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default BgChanger;