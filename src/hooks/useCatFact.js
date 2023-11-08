import { useEffect, useState } from "react";

export function useCatFact({ reloadButton }) {
  const [fact, setFact] = useState();
  const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      }).catch((error) => console.log(error))
  }, [reloadButton]);

  return { fact };
} // { fact: "string data random..."}