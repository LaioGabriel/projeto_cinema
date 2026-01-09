import { IconBrandCinema4d, IconHome, IconMovie } from "@tabler/icons-react";
interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="
  sticky top-0 z-50
  bg-slate-950/80 backdrop-blur-md
  border-b border-white/5
">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-yellow-400">
            {title}
          </h1>
          <IconMovie className="text-yellow-400" />
        </div>

        <ul className="flex gap-6 text-slate-200">
          <li className="relative group cursor-pointer">
            <a href="/">
              <IconHome />
            </a>
            <span className="
          absolute left-0 -bottom-1
          h-0.5 w-0
          bg-red-500
          transition-all duration-300
          group-hover:w-full
        " />
          </li>
        </ul>
      </div>
    </nav>

  );
}
