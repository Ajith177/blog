import React from 'react'

export function FetchAPI(){

  

const apiGet = () => {
    fetch('https://pokeapi.co/api/v2/ability/7')
    .then ((response)=>response.json())
    .then ((response)=>console.log(response))
    };
  return (
    <div>
      My API <br/>
      <button onClick={apiGet}>FetchAPI</button>
    </div>
  )
};

export default FetchAPI;
