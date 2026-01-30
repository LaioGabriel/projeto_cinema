interface Category {
    id: string;
    label: string;
}

interface CategoryTabsProps {
    categories: Category[];
    currentCategory: string;
    onCategoryChange: (id: string) => void;
    isSearching: boolean;
}

export default function CategoryTabs({ categories, currentCategory, onCategoryChange, isSearching }: CategoryTabsProps) {
    return (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`px-4 py-1.5 cursor-pointer rounded-full text-sm font-medium transition-all whitespace-nowrap ${currentCategory === cat.id && !isSearching
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}
