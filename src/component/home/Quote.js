import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { FiRefreshCcw } from "react-icons/fi";
import { getRandom } from "./utils";
import axios from "axios";

const Quote = ({ toggle }) => {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);

  const handleRefresh = () => {
    const randomNumber = getRandom(quotes.length);
    const newQuote = quotes[randomNumber];
    setQuote(newQuote);
  };

  async function getQuote() {
    console.log("quote");
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setQuotes(response.data);
      const randomNumber = getRandom(response.data.length);
      const newQuote = response.data[randomNumber];
      setQuote(newQuote);
    } catch (error) {
      setError(`${error.message} occured! Please check your connection.`);
    }
  }

  if (error) {
    return (
      <h1 className={toggle ? "quote-error-hidden" : "quote-error"}>{error}</h1>
    );
  }
  if (!quote) {
    return <Loading toggle={toggle} />;
  }

  return (
    <div className={toggle ? "quote-hidden" : "quote"}>
      <div className="quote-message">
        <p>{quote.text}</p>
        <cite className="quote-cite">{quote.author || "unknown"}</cite>
      </div>
      <div className="quote-refresh" onClick={handleRefresh}>
        <FiRefreshCcw />
      </div>
    </div>
  );
};

export default React.memo(Quote);
