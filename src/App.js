import { GlobalContext } from './contexts/GlobalContext'
import Router from './router/Router'
import GlobalState from './GlobalState'
import { useEffect } from 'react'


function App() {

  const context = GlobalState()
  

  useEffect(() => {
    handleLocalUser()
    handleLocalCart()
  }, [])


const handleLocalUser = () => {
    let userString = localStorage.getItem("user")
    userString || localStorage.setItem("user", JSON.stringify({}))
  
  }
  const handleLocalCart = () => {
    let cartString = localStorage.getItem("currCart")
    cartString || localStorage.setItem("currCart", JSON.stringify([]))
  
  }






  return (



    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>



  )
}

export default App
