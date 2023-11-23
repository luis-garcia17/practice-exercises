/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from 'next/link'
import styles from './page.module.scss'
import { useLinks } from "@/providers/LinksProvider";


export default function Home() {

  const { links } = useLinks();

  return (
    <main className={styles.home}>
      <h1>Practice exercises</h1>
      <p className={styles.description}>
        This page contains several practice exercises that you can do to get
        better, this is a reminder for you that the page now will use JS, Typescript, Sass, and React to solve everything. 
        So we'll have to rework the links and the focus of the homepage. We'll probably remove the individual languages or technologies pages too
        so we can have everything in one place.
        Also we will probably programatically generate the pages like the nextjs blog example, the sections will exist and we will also now include section levels like beginner and intermediate.
        But for now this page will only be our playground to test things that come to mind. Use all of these building block to build the final product someday.
      </p>
      <nav className={styles.exerciseLinks}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link key={link.href} href={link.href} className="secondary">
                  {link.text}
                </Link>
                <p>{link.description}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
