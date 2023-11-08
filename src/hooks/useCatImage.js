import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  const CAT_ENDPOINT_RANDOM_IMAGE =
    "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    if (!fact) return;

    fetch(CAT_ENDPOINT_RANDOM_IMAGE)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const [{ url }] = data;
        setImageUrl(url);
      }).catch((error) => console.log(error));
  }, [fact]);

  return { imageUrl };
} // { imageUrl: "https://..." }