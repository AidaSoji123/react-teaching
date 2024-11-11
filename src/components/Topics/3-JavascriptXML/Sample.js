import React from 'react'

const Sample = () => {
    var name = "Aida";
    var place = "Kozhikode";
    
    const wish = ()=>{
        return "Hello, Good morning"
    }
  return (
    <div>
    <h3>My name is {name}. I am from {place}.</h3>
  
    <h2>{wish()}</h2>
    </div>
  )
}

export default Sample