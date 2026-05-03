"use client";

import { useState, useEffect, useCallback } from "react";
import MainPage from "./components/MainPage";

const sortMap: Record<string, string> = {
  "rating_asc": "rating",
  "rating_desc": "-rating",
  "released_asc": "released",
  "released_desc": "-released",
  "name_asc": "name",
  "name_desc": "-name"
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  released: string;
};

export default function Page() {
  const [items, setItems] = useState<Game[]>([]);
  const [pages, setPages] = useState({ total_pages: 1, page: 1 });
  const [apiKey] = useState("ef35404b80fd4ebf85885eae45f2148e");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const gamesSet = useCallback((page = 1, term: string = "", sort: string = "") => {
    let url = "";
    const currentTerm = term.trim();

    if (currentTerm !== "") {
      url = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(
        currentTerm
      )}&page=${page}&page_size=20`;
    } else {

      const sortParam = sortMap[sort] || "";
      url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=20&ordering=${sortParam}`;
    }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setItems(data.results);
      setPages({
        total_pages: data.count ? Math.ceil(data.count / 20) : 1,
        page: page,
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, [apiKey]);

  useEffect(() => {
    gamesSet(1);
  }, [gamesSet]);

  const handleChangePage = (newPage: number) => {
    gamesSet(newPage, searchTerm);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    gamesSet(1, value, sortOption);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
    gamesSet(1, searchTerm, option);
  }

  return (
  // //<GamePage
  //   items={items}
  //   pages={pages}
  //   searchTerm={searchTerm}
  //   handleSearch={handleSearch}
  //   handleChangePage={handleChangePage}
  // />
  <div>
    <MainPage items={items} 
    page={pages.page} 
    total_pages={pages.total_pages} 
    handleChangePage={handleChangePage}
    searchTerm={searchTerm}
    handleSearch={handleSearch}
    sortOption={sortOption}
    handleSort={handleSort}
    />
  </div>
);
}