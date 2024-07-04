import React, { useState, useEffect } from "react"
import axios from "axios"
import QuoteBox from "./components/QuoteBox"
import "./App.css"

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const fetchNewQuote = async () => {
    const response = await axios.get("https://api.quotable.io/random")
    setQuote(response.data.content)
    setAuthor(response.data.author)
  }

  useEffect(() => {
    fetchNewQuote()
  }, [])

  return (
    <div className="App">
      <QuoteBox quote={quote} author={author} fetchNewQuote={fetchNewQuote} />
    </div>
  )
}

export default App
