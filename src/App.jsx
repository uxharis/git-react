import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <p>Hero section yaha add karna rahenga</p>
      </div>
      <Footer />
    </>
  )
}

export default App
