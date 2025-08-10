import { useEffect, useState } from "react";

function ContentBox() {
  const [data, setData] = useState([]); // array of quotes
  const [fadeState, setFadeState] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://quoteslate.vercel.app/api/quotes?page=1&limit=20");
      const json = await response.json();
      setData(json.data);
    };
    fetchData();
  }, []);

  const handleNext = () => {
    setCount((prev) => (prev + 1) % data.length);
  };

  return <>
      {data.length > 0 ? (
        <>
          <h1 className="heading">Quote Generator</h1>
          <div className="contentBox">
            <h1 style={{ opacity: fadeState ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
              "{data[count].quote}"
            </h1>
            <h2 style={{ opacity: fadeState ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
              By {data[count].author}
            </h2>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  
}

export default ContentBox;
