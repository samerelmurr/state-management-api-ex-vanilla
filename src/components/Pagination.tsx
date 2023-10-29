type ICharacter = {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    type: string | 'unknown',
}

type Props = {
    paginateBackward: () => void,
    paginateForward: () => void,
    currentPage: number,
    characters: Array<ICharacter>,
    charactersPerPage: number,
}

const Pagination = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center w-full mx-auto my-4 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <button 
            className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={props.paginateBackward}
            disabled={props.currentPage === 1}
          >
            Backward
          </button>

            <p className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded">
                {props.currentPage}
            </p>

            <p className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded">
                /
            </p>

            <p className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded">
                {Math.ceil(props.characters.length / props.charactersPerPage)}
            </p>

          <button 
            className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={props.paginateForward}
            disabled={props.currentPage === Math.ceil(props.characters.length / props.charactersPerPage)}
          >
            Forward
          </button>
    </div>    
  )
}

export default Pagination