import { useEffect, useState } from "react";

function ContentBox() {
  const [data, setData] = useState({}); // Holds both quote and author
  const [fadeState, setFadeState] = useState(true); // Fade state for quote and author

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://qapi.vercel.app/api/random");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleNext = async () => {
    setFadeState(false); // Start fade-out
    setTimeout(async () => {
      const response = await fetch("https://qapi.vercel.app/api/random");
      const newData = await response.json();
      setData(newData); // Update the data (quote and author)
      setFadeState(true); // Start fade-in
    }, 500); // Match CSS transition duration
  };

  return (
    <>
      <h1 className="heading">Quote Generator</h1>
      <div className="contentBox">
        {/* Quote with dynamic fade effect */}
        <h1
          style={{
            opacity: fadeState ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          "{data.quote}"
        </h1>
        {/* Author with the same fade effect */}
        <h2
          style={{
            opacity: fadeState ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          By {data.author}
        </h2>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default ContentBox;