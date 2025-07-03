import './App.css'
import { useState } from 'react'
import Display from "./pages/Display"
import Remote from "./pages/Remote"
import Switcher from './components/Switcher'

function App() {
  const [currentPage, setCurrentPage] = useState()

  if (!currentPage) {
    return (<Switcher currentPage={currentPage} setCurrentPage={setCurrentPage} />)
  }
  return (
    <>
      {currentPage == "display" && <Display />}
      {currentPage == "remote" && <Remote />}
    </>
  )
}

export default App
