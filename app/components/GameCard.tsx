import { Game } from '../page';
import Link from 'next/link';

type GameCardProps = {
    game: Game;
}

// Link and href are what's used to create a link to the game information page, 
// Allowing users to click on a game card and navigate to a detailed view of that game.
export default function GameCard({ game }: GameCardProps) {

    return(

        <div className='carousel-slide'>

            <div className='center-information'>

                <h3 className='game-title'>{game.name}</h3>

                <img className='img' src={game.background_image} alt={game.name} />

                <p className='game-date'>Rating: {game.rating} / 5 | Released: {game.released}</p>

                <Link href={`/info/${game.id}`}>
                    <button className='game-info-button'> View more information </button>
                </Link>
            </div>
        </div>

    )
}