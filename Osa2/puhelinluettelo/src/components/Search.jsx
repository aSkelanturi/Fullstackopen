const Search = ({ search, handleSearch }) => {
    return (
        <form>
        <div>
          Search for a person: <input value={search} onChange={handleSearch}/>
        </div>
      </form>
    )
}

export default Search