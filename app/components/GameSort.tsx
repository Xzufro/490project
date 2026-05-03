type GameSortProps = {
    sortOption: string;
    handleSort: (option: string) => void;
}

export default function GameSort ({ sortOption, handleSort }: GameSortProps )  {
    return (
        <select className='right-shift' value={sortOption} onChange={(e) => handleSort(e.target.value)}>
            <option value=''>Sort by</option>
            <option value='rating_asc'>Rating (Asc)</option>
            <option value='rating_desc'>Rating (Desc)</option>
            <option value='released_asc'>Released (ASC)</option>
            <option value='released_desc'>Released (Desc)</option>
            <option value='name_asc'>Game Title Name (Asc)</option>
            <option value='name_desc'>Game Title Name (Desc)</option>
        </select>
    )
}