import React from 'react';

const SearchForm = ({newSearch, setNewSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input type='text' 
        autoFocus
        value={newSearch}
        onChange = {(e) => setNewSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchForm