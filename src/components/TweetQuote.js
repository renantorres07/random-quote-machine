import React from "react"

const TweetQuote = ({ quote, author }) => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`
  return (
    <a
      id="tweet-quote"
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Tweet
    </a>
  )
}

export default TweetQuote
