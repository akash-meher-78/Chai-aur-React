import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/userContextProider"

function App() {

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col bg-black text-white">
      <UserContextProvider>
        <h1>Chai Aur Context Api</h1>

        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
