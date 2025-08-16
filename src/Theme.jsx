import React, { useEffect, useState } from 'react'
import useTheme, { ThemeProvider } from './context/theme'
import ThemeBtn from './09ContextApi/ThemeBtn'
import Card from './Component/card'

function Theme() {
    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }

    // change Theme
    useEffect(() =>{
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])



    return (
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* themeBtn */}
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        {/* Card */}
                        <Card/> 
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Theme