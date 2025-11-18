import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProdottiPage from "./Pages/ProdottiPage"
import DefaultLayout from "./Layout/DefaultLayout"
import ChiSiamo from "./Pages/ChiSiamo"
import ProdottoPage from "./Pages/ProdottoPage"
import Error from "./Pages/Error"
import CountContext from "./contexts/CountContext"
import { useState } from "react"
function App() {
  const [shop, setShop] = useState([])
  let count = 0
  function addShop(id) {
    if (!myCounter(id)) {
      setShop([id, ...shop])
      return count + 1
    } else {
      removeShop(id)
    }
  }

  function removeShop(id) {
    const filtered = shop.filter(item => item !== id)
    setShop(filtered)
  }

  function myCounter(id) {
    return shop.includes(id)
  }
  return (
    <>
      <CountContext.Provider value={{ count, setShop, shop, myCounter, addShop }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/prodotti" element={<ProdottiPage />} />
              <Route path="/prodotti/:id/*" element={<ProdottoPage />} />
              <Route path="*" element={<Error />} />
              <Route path="/contacts" element={<ChiSiamo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CountContext.Provider>
    </>
  )
}

export default App
