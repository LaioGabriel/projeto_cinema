import { IconMovie } from "@tabler/icons-react";
import { useState } from "react";
import SearchForm from "./searchForm";
import CategoryTabs from "./categoryTabs";

interface NavbarProps {
  title: string;
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

export default function Navbar({ title, onSearch, onCategoryChange, currentCategory }: NavbarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const categories = [
    { id: 'now_playing', label: 'Em Cartaz' },
    { id: 'popular', label: 'Populares' },
    { id: 'top_rated', label: 'Bem Avaliados' },
  ];

  const resetView = () => {
    setSearchValue("");
    onSearch("");
    onCategoryChange("popular");
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={resetView}>
            <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-900/40">
              <IconMovie size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {title}
            </h1>
          </div>

          <SearchForm
            value={searchValue}
            onChange={setSearchValue}
            onSubmit={handleSearchSubmit}
          />

          <CategoryTabs
            categories={categories}
            currentCategory={currentCategory}
            onCategoryChange={(id) => {
              setSearchValue("");
              onCategoryChange(id);
            }}
            isSearching={!!searchValue}
          />
        </div>
      </div>
    </nav>
  );
}

