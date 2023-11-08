import { useState } from "react";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";
import colorRandom from "./colors.js";

function App() {
  const [reloadButton, setReloadButton] = useState(false);
  const { fact } = useCatFact({ reloadButton });
  const { imageUrl } = useCatImage({ fact });
  const [bgColorChanged, setBgColorChanged] = useState("bg-sky-600");

  const handleRandom = () => {
    // change button state
    setReloadButton(!reloadButton);

    // function to get a color random
    let newColor;
    do {
      const logicRandom = Math.floor(Math.random() * colorRandom.length);
      newColor = colorRandom[logicRandom].color;
    } while (newColor === bgColorChanged);

    setBgColorChanged(newColor);
  };

  return (
    <main className="text-white h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center underline font-semibold">Cats app</h1>
      <article
        className={`${bgColorChanged} p-2 flex m-3 gap-2 max-w-2xl max-h-80 rounded-md max-sm:flex-col max-sm:p-3 max-sm:items-center max-sm:max-h-fit`}
      >
        <section className="flex flex-col justify-center max-w-md">
          <h2 className="text-2xl capitalize">Interesting fact</h2>
          {fact && <p>{fact}</p>}
        </section>
        <section className="bg-white relative h-72 w-60 p-2 max-sm:h-52">
          {imageUrl && (
            <img
              src={imageUrl}
              className="h-5/6 w-11/12 object-cover absolute m-auto z-10 right-0 left-0"
              alt="random cat photo extract to TheCatAPI"
            />
          )}

          <div className="absolute bottom-0 z-5 w-11/12 flex justify-center">
            <strong className="text-black text-xl">Photo</strong>
          </div>
        </section>
      </article>

      <footer className="flex justify-center">
        <button
          className="bg-sky-600 text-white capitalize py-1 px-3 rounded-md hover:bg-sky-500 hover:text-gray-200 outline-none"
          onClick={() => {
            handleRandom();
          }}
        >
          other data
        </button>
      </footer>
    </main>
  );
}

export default App;
