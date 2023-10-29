import { useState, useEffect, createContext, useReducer, useCallback, useMemo, useContext } from 'react'

type ICharacter = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string | 'unknown',
  }

  //API URL
const url: string = 'https://rickandmortyapi.com/api/character';

//funtion for custom hook to get rick and mordy characters
const useCharactersData = (): {
    characters: Array<ICharacter>;
    loading: boolean;
    error: boolean;
    search: string;
    setSearch: (search: string) => void;
} => {

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    
    type CharacterState = {
        search: string;
        setSearch: (search: string) => void;
        characters: Array<ICharacter>;
    }

    type CharacterAction = 
    | {type: 'setCharacter'; payload: Array<ICharacter>;} 
    | {type: 'setSearch'; payload: string};

    const [{search, characters}, dispatch] = useReducer(
        (state: CharacterState, action: CharacterAction) => {
        switch (action.type) {
            case 'setCharacter':
            return {
                ...state,
                characters: action.payload,
            }
            case 'setSearch':
                return {
                    ...state,
                    search: action.payload,
                }
            default:
            return state
        }
        },
        {
        search: '',
        setSearch: () => {},
        characters: [],
        }
    )

    useEffect(() => {
        fetchCharacters()
    }, [])

    //fetch data from API
    const fetchCharacters = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            dispatch(
                {
                type: 'setCharacter',
                payload: data.results,
                }
            )
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    const setSearch = useCallback((search: string) => {
        dispatch({
        type: 'setSearch',
        payload: search,
        })
    }, [])

    //filter characters
    const filteredCharacters = useMemo(() => {
        // console.log('search', search)
        return characters.filter((character) => {
            return character.name.toLowerCase().includes(search.toLowerCase())
        })
    }, [characters, search])

    // console.log('filteredCharacters', filteredCharacters)
    // console.log('characters store: ', {characters: filteredCharacters})
  return { characters: filteredCharacters, loading, error, search, setSearch }
}


//Context for character
const CharacterContext = createContext<
  ReturnType<typeof useCharactersData> | undefined
>(
  undefined
)

//custom hook for character
export const useCharacters = () => {
    const context = useContext(CharacterContext)
    if (context === undefined) {
        throw new Error(
        'useCharacters must be used within a CharacterProvider'
        )
    }
    return context
}

//Provider for character
export const CharacterProvider = (
    {children} : {children: React.ReactNode}
) => {


  const characterHook = useCharactersData()

  return (
    <CharacterContext.Provider value={characterHook}>
      {children}
    </CharacterContext.Provider>
  )
}