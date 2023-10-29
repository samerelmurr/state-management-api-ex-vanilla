import { useCharacters } from "../state-management/store";

export const SearchBox = () => {
  const {search, setSearch} = useCharacters();

  // console.log(search)
  return(
      <input 
        type="search" 
        id="default-search" 
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required />
  )
}