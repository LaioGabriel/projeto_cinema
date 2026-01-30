'use client'
import { useState } from "react";
import Navbar from "./.components/navbar";
import MovieList from "./.components/movieList";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("popular");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setSearchQuery(""); // Clear search when category changes
  };

  return (
    <main className="min-h-screen bg-[#020617] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]">
      <Navbar
        title="Cineminha"
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        currentCategory={category}
      />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <MovieList searchQuery={searchQuery} category={category} />
      </div>
    </main>
  );
}
