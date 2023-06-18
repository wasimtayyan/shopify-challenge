import React, { useState } from 'react'

function SearchInput({ setSearch, nominate, isDisable ,setIsDisable }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
    if (nominate.length === 5) {
      setIsDisable(true);
    } else if (nominate.length < 5) {
      setIsDisable(false);
    }
  };
  return (
    <input
      className="border py-3 px-8 "
      onChange={(e) => handleChange(e)}
      disabled={isDisable}
    />
  );
}

export default SearchInput