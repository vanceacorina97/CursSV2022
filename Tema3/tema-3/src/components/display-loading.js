import { useEffect, useState } from "react";

/*Exercitiul 5 -  Componenta care afiseaza un mesaj de loading 
timp de 5 secunde si dupa alt mesaj */
const DisplayLoading = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);
  if (!loaded) return <div className="message">Loading, please wait...</div>;
  return <div className="message loaded">Finished loading</div>;
};

export default DisplayLoading;
