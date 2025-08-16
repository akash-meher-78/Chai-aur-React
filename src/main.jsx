import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TailwindProps from './TailwindProps.jsx'
import BgChanger from './BgChanger.jsx'
import PasswordGenerator from './PasswordGenerator.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import Github from './Component/Github/Github.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './contextComponent/Login.jsx'
import Profile from './contextComponent/Profile.jsx'
import Theme from './Theme.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={() => {}}
//       path='github' 
//       element={<Github />} />
//     </Route>
//   )
// )


createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <App /> */}
    {/* <TailwindProps/> */}
    {/* <BgChanger/> */}
    {/* <PasswordGenerator/> */}

    {/* <RouterProvider router={router}/> */}
    <Theme/>
  </StrictMode>,
  // <UserContextProvider>
  //   <h1>React With Chai Code</h1>
  //   <Login/>
  //   <Profile/>
  // </UserContextProvider>
)
