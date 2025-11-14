import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProdottiPage from "./Pages/ProdottiPage"
import DefaultLayout from "./Layout/DefaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/prodotti" element={<ProdottiPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
