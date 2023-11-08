import { useEffect, useState } from "react";

export function useCatFact({ reloadButton }) {
  const [fact, setFact] = useState();
  const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, [reloadButton]);

  return { fact };
} // { fact: "string data random..."}