import react, { useEffect, useState } from "react";
import axios from "axios";
import "./quote.css";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const generate = async () => {
    try {
      let data = await axios.get("https://api.quotable.io/random");
      setQuote(data.data.content);
      setAuthor(data.data.author);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    generate();
  }, []);
  return (
    <>
      <div className="container">
        <div className="box">
          <p className="quotes">{quote}</p>
          <p>{author}</p>
          <button className="generate" onClick={generate}>
            generate
          </button>
        </div>
      </div>
    </>
  );
};

export default Quote;
