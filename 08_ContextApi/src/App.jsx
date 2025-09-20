import AddDec from "./components/AddDec"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProider"

function App() {

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col bg-black text-white">
      <UserContextProvider>
        {/* Resume 41:00 */}
        {/* <Login /> */}
        {/* <Profile /> */}
        <AddDec/>
      </UserContextProvider>
    </div>
  )
}

export default App
