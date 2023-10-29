type ICharacter = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string | 'unknown',
}

type Props = {
    characters: Array<ICharacter>,
    loading: boolean,
    error: boolean,
}

const Posts = (props: Props) => {

  return (
    <div className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            props.error? <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Error...</h2>: 
            props.loading ? <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Loading...</h2> :
            props.characters.map((character: ICharacter) => {
              return (
                <div
                  className="flex flex-col items-center justify-center w-full h-full px-4 py-4 mx-auto my-4 bg-white rounded-lg shadow-xl dark:bg-gray-800" key={character.id} 
                  >
                  <div className="flex flex-row items-center justify-center gap-10 w-full mx-auto my-4 bg-white rounded-lg shadow-xl dark:bg-gray-800" key={character.id}>
                    <img className="w-32 h-32 rounded-full" src={character.image} alt={character.name} />
                    <div className="mt-2 text-center">
                      <p className="text-lg font-medium text-gray-800 dark:text-white">{character.name}</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{character.species} - {character.status}</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{character.type}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
    </div>
  )
}

export default Posts