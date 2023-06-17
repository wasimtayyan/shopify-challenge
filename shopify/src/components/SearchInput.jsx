import React, { useState } from 'react'

function SearchInput({ setSearch, nominate }) {
  const [isDisable,setIsDisable] = useState(false)
  const handleChange = (e) =>{
    setSearch(e.target.value)
    if(nominate.length >= 5){
      setIsDisable(true)
    }else if (nominate.length < 5){
      setIsDisable(false)
    }
    
  }
  return (
    <input className="border " 
    onChange={(e) =>handleChange(e) } 
    disabled={isDisable} />
  );
}

export default SearchInput