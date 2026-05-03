import React from "react";

// ReactDOM is used to render the application into the DOM, while BrowserRouter is what enables 
// Client-side routing in a React application.
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./page";

// GameInfo is the component that will display detailed information about a specific 
// Game when a user clicks on it from the main page.
// Which is where the routing will occur, allowing users to navigate to the game 
// Information page based on the game's ID.
import GameInfo from "./info/[id]/page";

// This specifically is used to create a root element in the DOM and 
// Render the React application into it.
ReactDOM.createRoot(document.getElementById("root")!).render(

    // React.StrictMode is a wrapper component that helps identify potential problems in an application.
    // BrowserRouter is used to enable client-side routing, allowing the application to navigate 
    // Between different pages without a full page reload.
    // And Routes and Route are used to define the different routes in the application, specifying which 
    // Component it is supposed to render based on the URL path.
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/info/:id" element={<GameInfo />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);