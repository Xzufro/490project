"use client";

import { useEffect, useState } from "react";

// Link and useParams are imported from Next.js, which 
// Are used for client-side navigation and accessing URL parameters respectively.
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../components/styles.module.css";

export default function GameInfo() {
    const { id }  = useParams<{ id: string }>();

    const [game, setGame] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");

    // Using !id is a safe way to ensure that the fetch call is only made when the id parameter is available, 
    // Preventing potential errors from trying to fetch data with an undefined id.
    useEffect(() => {
        if (!id) return 
            fetch(`https://api.rawg.io/api/games/${id}?key=ef35404b80fd4ebf85885eae45f2148e`)
                .then((response) => response.json())
                .then((data) => {
                    setGame(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching game details:", error);
                    setLoading(false);
                });
    }, [id]);

    // Just a way of creating a loading state to show while the data is being fetched
    if (loading) {
        return <div className="center-information">Loading...</div>;
    }

    // If the game data isn't found then it'll display message towards user
    if (!game) {
        return <div>Game not found.</div>;
    }

    // const ersbSlug = game.esrb_rating?.slug || "";
    
    // This method is what helps with taking away the issue
    // Of re-rendering compared to the other 2 method previously
    // Used
    const getESRBImage = (slug: string) => {
        switch(slug) {
            case "everyone":
                return "/ESRB/E_Everyone.png";
            case "everyone-10-plus":
                return "/ESRB/E_Ten_Up.png";
            case "teen":
                return "/ESRB/T_Teen.png";
            case "mature":
                return "/ESRB/M_Mature.png";
            case "adults-only":
                return "/ESRB/AO_Adults_Only.png";
            default:
                return "";
        }
    };

    // Attempt to use a safer method of setting the ESRB image based on the slug
    // Rather than relying on multiple if statements
    // const ersbImage: Record <string, string> = {
    //     "everyone": "/ESRB/E_Everyone.png",
    //     "everyone-10-plus": "/ESRB/E_Ten_Up.png",
    //     "teen": "/ESRB/T_Teen.png",
    //     "mature": "/ESRB/M_Mature.png",
    //     "adults-only": "/ESRB/AO_Adults_Only.png",
    // }

    // const imageSrc = getESRBImage(ersbSlug ?? "");

    // Earlier method of setting the image based on ESRB rating,
    // Replaced by getESRBImage function for better readability and maintainability
    // if (game.esrb_rating?.slug === "everyone-10-plus") {
    //     setImage("/ESRB/E_Ten_Up.png");
    // }

    return (
        <div className="center-information">
            <h1 className="title">{game.name}</h1>

            
            <img className="info-image" src={game.background_image} alt={game.name} />
            
            
            <div className="info-details">
                <p className="info-text">ESRB Rating: </p>
                <img className="rating-image" src={getESRBImage(game?.esrb_rating?.slug)} alt={game.esrb_rating?.name} />

                <p className="info-text">Rating: {game.rating} / 5</p>
                <p className="info-text">Released: {game.released}</p>

                <p className="info-text">Metacritic: {game.metacritic || "N/A"}</p>
            </div>

            <h3 className="info-description">Description:</h3>
            <p className="info-text">{game.description_raw}</p>

            <Link href="/">
                <button className="return-menu-button">Back to Main Page</button>
            </Link>
        </div>
    )
}