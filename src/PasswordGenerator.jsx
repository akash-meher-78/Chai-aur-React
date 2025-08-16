import { Copy } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

function PasswordGenerator() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

    if (number) str += "0123456789"
    if (charAllowed) str += "|{},.!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, charAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 2)
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);

  }, [password]);



  useEffect(() => {
    passwordGenerator()
  }, [length, number, charAllowed, passwordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-2xl text-center mt-4 mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white" placeholder="password" readOnly ref={passwordRef} />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-1  shrink-0 cursor-pointer">
            <Copy />
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={4} max={100} value={length} className="cursor-pointer" onChange={(e) => { (setLength(e.target.value)) }} />
            <label> Length: {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={number} id="numberInput" onChange={() => {
              setNumber((prev) => !prev);
            }} />
            <label htmlFor="">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="numberInput" onChange={() => {
              setcharAllowed((prev) => !prev);
            }} />
            <label>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default PasswordGenerator;