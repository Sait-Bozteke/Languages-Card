import "./Item.css";
import { useState } from "react";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true)

  const showItem = () => {
    setTimeout(() => {
      setShowLogo(showLogo)
    }, 5000);
    setShowLogo(!showLogo)
  }

  return (
    <div className="card" onClick={showItem}>
      {showLogo ? (

      
      <div>
        <img className="card-logo" src={card.img} alt="logo" />
        <h3 className="card-title">{card.name}</h3>
        {/* {console.log(card)} */}
      </div>
      ) : (
      <ul className="list">
        {
          card.options.map((element, index) => {
            return(
              <li key={index}>{element}</li>
            )
          })
        }
      </ul>
      )}
    </div>

  );
};

export default Item;
