import { motion } from "framer-motion";
import { NavLink } from "./types";

interface Props {
  item: NavLink;
  onHover?: (text: string | null) => void;
  active?: boolean;
}

export default function NavItem({ item, onHover, active }: Props) {
  if (!item.submenu) {
    return (
      <a
        href={item.url}
        className="font-medium hover:text-white transition"
      >
        {item.text}
      </a>
    );
  }

  return (
    <div
      onMouseEnter={() => onHover?.(item.text)}
      onMouseLeave={() => onHover?.(null)}
      className="relative"
    >
      <span className="cursor-pointer">{item.text}</span>

      {active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-4 bg-black rounded-xl p-4 w-64"
        >
          {item.submenu.map((sub) => (
            <a
              key={sub.title}
              href={sub.url}
              className="block p-2 rounded hover:bg-white/10"
            >
              <p className="font-medium">{sub.title}</p>
              {sub.description && (
                <p className="text-sm opacity-70">{sub.description}</p>
              )}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
