import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="h-[100vh] max-w-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-3xl text-center">Chai aur code | React</h1>

      <div className="border text-center h-[300px] w-[300px] flex justify-center flex-col  items-center gap-10">
        <h2>Counter vlaue: {counter}</h2>

        <div className="flex flex-row gap-3.5">
          <button onClick={addValue} className="px-5 py-2 border cursor-pointer hover:text-yellow-500">Add</button>

          <button onClick={removeValue} className="px-1 py-2 border cursor-pointer hover:text-yellow-500">Remove</button>
        </div>
        {/* Assignment remove not go below zero and add = 20 */}
      </div>
    </div>
  )
}

export default App;