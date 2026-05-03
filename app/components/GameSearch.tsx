type GameSearchProps = {
    searchTerm: string;
    handleSearch: (value: string) => void;
}

export default function GameSearch({ searchTerm, handleSearch }: GameSearchProps )  {
    return (
        <input 
            className='shift' 
            type="text" 
            placeholder="Search for games..." 
            value={searchTerm || ''}
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}