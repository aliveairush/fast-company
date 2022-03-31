import React from 'react';

const SearchStatus = ({length}) => {

  if (length === 0) return <h3><span className="badge bg-primary bg-danger mt-4 ">Никто с тобой не тусанет</span></h3>

  const wordForms = ['Человек', 'Человека']
  let word = wordForms[0];

  const remainder = length % 10;
  if (remainder >= 2 && remainder <= 4) word = wordForms[1]; // if remainder is 2 then its  2, 12, 22,... and correct lexical form is plural
  if (length >= 12 && length <= 14) word = wordForms[0]; // but even if remainder 2,3 or 4 there is exception with numbers 12,13,14. And correct lexical form is single

  return <h3><span className="badge bg-primary mt-4 ">{length} {word} тусанет с тобой сегодня</span></h3>

};

export default SearchStatus;