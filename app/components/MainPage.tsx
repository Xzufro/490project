import { Game } from '../page';
import NextPage from './NextPage';
import GameCard from './GameCard';
import GameSearch from './GameSearch';
import GameSort from './GameSort';

type GamePageProps = {
    items: Game[];
    page: number;
    total_pages: number;
    handleChangePage: (newPage: number) => void;
    searchTerm: string;
    handleSearch: (value: string) => void;
    sortOption: string;
    handleSort: (option: string) => void;
}

// Code for main page had reused code from homework 3 to allow same functionality but with a few
// Modifications to fit the new design and structure of the application such as the horizontal
// Scrolling effect as well as linking the button to an information webpage
export default function MainPage({ items, page, total_pages, handleChangePage, searchTerm, handleSearch, sortOption, handleSort }: GamePageProps)  {
    return (
        <div>
            <div className='centered'>
                <h1 className='title'>Game Library Explorer_</h1>
            </div>
            <div className='input'>

                <GameSearch searchTerm={searchTerm} handleSearch={handleSearch} />
                <GameSort sortOption={sortOption} handleSort={handleSort} />

            </div>
            <div className='carousel'>
                <div className='carousel-slide-2'></div>
                    {items.map((game) => (

                        <GameCard key={game.id} game={game} />

                    ))}
                <div className='carousel-slide-2'></div>
            </div>

            <NextPage page={page} total_pages={total_pages} handleChangePage={handleChangePage} />

        </div>
    )
}