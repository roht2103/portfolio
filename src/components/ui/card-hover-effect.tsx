import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    date?: string;
    description: string;
    highlights?: string[];
    technologies?: string[];
    sourceCode?: string;
    link: string;
    featured?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4 gap-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-start justify-between mb-2">
              <CardTitle>{item.title}</CardTitle>
              {item.featured === "true" && (
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex-shrink-0">
                  Featured
                </span>
              )}
            </div>
            {item.date && (
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{item.date}</p>
            )}
            <CardDescription>{item.description}</CardDescription>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="space-y-1 mt-2 mb-2">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-1.5 flex-shrink-0"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 mb-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-2 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
              {item.sourceCode && (
                <a
                  href={item.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconBrandGithub className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <IconExternalLink className="w-3.5 h-3.5" />
                Demo
              </a>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-3 overflow-hidden bg-white dark:bg-black border border-slate-200 dark:border-white/[0.2] group-hover:border-slate-400 dark:group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-slate-900 dark:text-zinc-100 font-bold tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-slate-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
