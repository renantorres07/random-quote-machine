import React from "react"

const NewQuoteButton = ({ fetchNewQuote }) => (
  <button id="new-quote" onClick={fetchNewQuote}>
    New Quote
  </button>
)

export default NewQuoteButton
