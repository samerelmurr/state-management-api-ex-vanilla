import './App.css'
import { CharacterList } from './components/CharacterList';
import { SearchBox } from './components/SearchBox';
import { CharacterProvider} from './state-management/store';

//search box


function App() {

  return (
    <CharacterProvider>
      <>
        {/* Title of App "Rick and Morty Character Sheet" using tailwindcss */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-black">Rick and Morty Character Sheet</h1>

        {/* Search Box */}
        <SearchBox />

        {/* Display Character List */}
        <CharacterList />
        
      </>
    </CharacterProvider>
  )
}

export default App
