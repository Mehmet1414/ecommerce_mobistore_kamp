import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import AboutPage from "./pages/about"
import MainPage  from "./pages/main"



function App() {

  return (
    <>
    
   <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    
      
    </>
  )
}

export default App
