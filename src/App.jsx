import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AboutPage from "./pages/about"
import MainPage  from "./pages/main"
import { useApi } from "./hook/useApi"
import { useDispatch } from "react-redux"
import { setCategories } from "./redux/CategorySlice"



function App() {

  const api = useApi()
  const dispatch = useDispatch()
  useEffect(()=>{
    (async ()=>{
      const categoryRespons = await api.get("")
      dispatch(setCategories(categoryRespons.data))
    })()
  },[])

  return (
    <>
    
   <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
    
      
    </>
  )
}

export default App
