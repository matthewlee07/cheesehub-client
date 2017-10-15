import React from 'react';

export default function CheeseList(props){
  

  return (
    <ul>
      {props.sampleCheese.map((cheese, idx) => (
        <li key={idx}>{cheese}</li>
      ))}
    </ul>
  )
}

