import axios from "axios";
import { useState } from "react";


function App() {
    const [quote, setQuote] = useState(
      'Inflammable means flammable? What a country!'
    );

    const getQuote = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((res) => res.data) // ca se passe bien
    .then((data) => setQuote(data[0]))
    .catch((err) => console.log(err)); 
    };

  return (
    <div className="App">
      {/* Bouton qui va appeler la fonction d'appel api Random fact*/}
      <button type="button" onClick={() => getQuote()}>
        Get Simpsons Quote
      </button>
      <div>{quote.quote}</div>
      <div>{quote.character}</div>
      <img src = {quote.image} alt = "image"/>
    </div>
  );
}

export default App;

    
   
     