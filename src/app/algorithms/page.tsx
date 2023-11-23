"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import styles from "./styles.module.scss";

const ReactExercises = () => {
  const pathname = usePathname();

  interface LinkData {
    id: number;
    text: string;
    href: string;
  }

  const linksData: LinkData[] = [
    {
      id: 1,
      text: "Corresponding Squared Value",
      href: `/corresponding-squared-value`,
    },
    {
      id: 2,
      text: "Anagram",
      href: `/anagram`,
    },
    {
      id: 3,
      text: "Count unique values using two pointers",
      href: `/unique-values-pointers`,
    },
    {
      id: 4,
      text: "Same frequency",
      href: `/same-frequency`,
    },
    {
      id: 5,
      text: "Are there duplicates?",
      href: `/are-there-duplicates`,
    },
    {
      id: 6,
      text: "Average pair",
      href: `/average-pair`,
    },
  ];

  return (
    <main>
      <section>
        <h1>Algorithms and data structures exercises</h1>
        <p>
          This is a collection of exercises for algorithms and data structures
        </p>
      </section>
      <nav>
        <ul>
          {linksData.map((link) => {
            return (
              <li key={link.id}>
                <Link href={`${pathname}/${link.href}`} passHref>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
};

export default ReactExercises;
