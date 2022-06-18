import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLooding, setIsLooding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }

          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLooding(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setIsLooding(false);
          setError(err.message);
        });
    }, 2000);
  }, [url]);
  return {data, isLooding, error}
};

export default useFetch;
