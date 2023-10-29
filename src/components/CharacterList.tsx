import {useState} from 'react';
import {useCharacters} from '../state-management/store';
import Pagination from './Pagination';
import Posts from './Posts';


export const CharacterList = () => {

    const {characters, loading, error}  = useCharacters();
  
    // console.log("Posts: ", characters)
  
    //Pagination for character list
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [charactersPerPage] = useState<number>(5);
  
    //Get current characters
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    // console.log("Current Characters: ", currentCharacters)
  
    //Change page
    const paginateForward = () => setCurrentPage(currentPage + 1);
    const paginateBackward = () => setCurrentPage(currentPage - 1);
  
    
    return(
      <>
          {/* Character List */}
          <Posts characters={currentCharacters} loading={loading} error={error} />
  
          {/* Pagination */}
          <Pagination 
            paginateBackward={paginateBackward}
            paginateForward={paginateForward}
            currentPage={currentPage}
            characters={characters}
            charactersPerPage={charactersPerPage}
          />
      </>
  
    )
  }
  