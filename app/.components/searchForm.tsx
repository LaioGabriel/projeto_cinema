import { IconSearch } from "@tabler/icons-react";

interface SearchFormProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function SearchForm({ value, onChange, onSubmit }: SearchFormProps) {
    return (
        <form onSubmit={onSubmit} className="relative w-full md:w-96">
            <input
                type="text"
                placeholder="Pesquisar filmes..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-full focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-700 transition-all outline-none text-slate-100 placeholder:text-slate-500"
            />
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        </form>
    );
}
