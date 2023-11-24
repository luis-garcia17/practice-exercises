'use client'

import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import styles from './styles.module.scss'

const JavascriptExercises = () => {
  const pathname = usePathname();

  interface LinkData {
    id: number;
    text: string;
    href: string;
  }

  const linksData: LinkData[] = [
    {
      id: 1,
      text: "Range function",
      href: `/range-function`,
    },
    {
      id: 2,
      text: "Schedule meeting",
      href: `/schedule-meeting`,
    },
    {
      id: 3,
      text: "Slot machine",
      href: `/slot-machine`,
    },
    {
      id: 4,
      text: "Loop a triangle",
      href: `/loop-a-triangle`,
    },
    {
      id: 5,
      text: "FizzBuzz",
      href: `/fizzbuzz`,
    },
  ];

  return (
    <main className={styles.javascriptExercises}>
      <section>
        <h1>Javascript exercises</h1>
        <p>
          Most exercises on this page will be Javascript-centric, although most
          of them are done using React, Typescript, SASS and Next.js. <br />
          Follow the links to start solving!
        </p>
      </section>
      <nav>
        <ul className={styles.links}>
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

export default JavascriptExercises