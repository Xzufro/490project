"use client";

type Game = {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
};

type Pages = {
  total_pages: number;
  page: number;
};

type GamePageProps = {
  items: Game[];
  pages: Pages;
  searchTerm: string;
  handleSearch: (value: string) => void;
  handleChangePage: (newPage: number) => void;
};

export default function GamePage({
  items,
  pages,
  searchTerm,
  handleSearch,
  handleChangePage,
}: GamePageProps) {
  return (
    <main className="container">
      <h1 className="title">Game Library Explorer</h1>
      <p className="subtitle">Browse top games and scroll through them.</p>

      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="games-scroll">
        {items.map((game) => (
          <div key={game.id} className="game-card">
            <img
              className="game-image"
              src={game.background_image}
              alt={game.name}
            />
            <h2 className="game-title">{game.name}</h2>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handleChangePage(pages.page - 1)}
          disabled={pages.page <= 1}
        >
          Prev
        </button>

        <span>
          Page {pages.page} of {pages.total_pages}
        </span>

        <button
          onClick={() => handleChangePage(pages.page + 1)}
          disabled={pages.page >= pages.total_pages}
        >
          Next
        </button>
      </div>
    </main>
  );
}