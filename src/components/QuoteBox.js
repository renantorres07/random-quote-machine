import React from "react"
import Quote from "./Quote"
import Author from "./Author"
import NewQuoteButton from "./NewQuoteButton"
import TweetQuote from "./TweetQuote"

const QuoteBox = ({ quote, author, fetchNewQuote }) => (
  <div id="quote-box">
    <Quote text={quote} />
    <Author author={author} />
    <NewQuoteButton fetchNewQuote={fetchNewQuote} />
    <TweetQuote quote={quote} author={author} />
  </div>
)

export default QuoteBox
