/* const bulbs = [
  {
    id: 1,
    brand: "Philips",
    watt: 9,
    color: "White",
    isOn: true,
  },
  {
    id: 2,
    brand: "Walton",
    watt: 12,
    color: "Warm White",
    isOn: false,
  },
  {
    id: 3,
    brand: "Singer",
    watt: 15,
    color: "White",
    isOn: true,
  },
  {
    id: 4,
    brand: "Vision",
    watt: 7,
    color: "White",
    isOn: false,
  },
  {
    id: 5,
    brand: "Panasonic",
    watt: 10,
    color: "Cool White",
    isOn: true,
  },
]; */

import { use } from "react";

/* const Ligts = () => {
  const idNum = bulbs.find((id) => id.id === 3);
  return (
    <div>
      {bulbs.map((bulb) => (
        <p>Name : {bulb.brand}</p>
      ))}
      {bulbs
        .filter((on) => on.isOn === true)
        .map((bulb) => (
          <p> This buls are on : {bulb.brand}</p>
        ))}
      {bulbs
        .filter((white) => white.color === "White")
        .map((bulb) => (
          <p> This buls are white : {bulb.brand}</p>
        ))}
      {bulbs
        .filter((watt) => watt.watt > 10)
        .map((bulb) => (
          <p> This buls are grater than 10 waat : {bulb.brand}</p>
        ))}
      {
        <p>
          {idNum.brand}
          {idNum.color}
        </p>
      }
      {bulbs.map((bulb) => 
      /*   if (bulb.isOn === true) {
          return <p>Light on {bulb.brand}</p>;
        } else {
          return <p>Light off : {bulb.brand}</p>;
        } */
   /*     bulb.isOn? <p>{bulb.brand} is on </p>:<p>{bulb.brand} is off</p>
      )}
    </div>
  ); */
//} 


const Ligts = ({jsonData}) => {
    const dataValue = use(jsonData)
    console.log(dataValue);
    
    return (
        <div>
            
        </div>
    );
};

export default Ligts;


