"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/cn";
export function CardStackDemo(cards: any) {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sanjay Amirthraj",
    designation: "GOAT",
    content: (
      <p>
        Sanjay <Highlight>is the goat</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Oleg",
    designation: "Is braindead",
    content: (
      <p>
        <Highlight>SCREW OLEG</Highlight> and allat{" "}
        <Highlight>type shit</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Monkey",
    designation: "Banana",
    content: (
      <p>
        Ooh ooh <Highlight>ah ah</Highlight>
      </p>
    ),
  },
];
