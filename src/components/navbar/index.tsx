'use client'

import { useState, useEffect, useRef } from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss'
import { useLinks } from '@/providers/LinksProvider';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const { links } = useLinks();
  const pathname = usePathname();

  const DesktopNavBar = () => {

    return (
      <nav className={styles.desktopNavbar}>
        <ul>
          <li>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="logo"
              className={styles.logo}
            />
          </li>
          <li className={styles.home}>
            <Link
              href="/"
              className={Object.is(pathname, "/") ? styles.selected : ""}
            >
              Home
            </Link>
          </li>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  passHref
                  className={
                    Object.is(pathname, link.href) ? styles.selected : ""
                  }
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  const MobileNavbar = () => {

    return (
      <nav className={styles.mobileNavbar}>
        <GiHamburgerMenu
          className={styles.hamburgerMenu}
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <Image
          src="/logo.png"
          width={48}
          height={48}
          alt="logo"
          className={styles.logo}
        />
      </nav>
    );
  };

  const Sidebar = () => {

    const sidebarRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {

    // }, [showSidebar]);

    // const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    //   event.preventDefault();

    //   const link = event.currentTarget;
    //   const href = link.getAttribute("href");

    //   router.push(href);

    //   if (showSidebar) {
    //     handleCloseSidebar();
    //   }
    // };

    const handleCloseSidebar = () => {
      sidebarRef.current!.classList.add(styles.closing);
      setTimeout(() => {
        setShowSidebar(false);
      }, 500)
      console.log("sidebarRef: ", sidebarRef);
    }

    return (
      <nav className={styles.sidebar} ref={sidebarRef}>
        <FaXmark className={styles.closeButton} onClick={handleCloseSidebar} />
        <ul>
          <li className={styles.home}>
            <Link
              href="/"
              className={Object.is(pathname, "/") ? styles.selected : ""}
            >
              Home
            </Link>
          </li>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  passHref
                  className={
                    Object.is(pathname, link.href) ? styles.selected : ""
                  }
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  return (
    <header className={styles.navbar}>
      <DesktopNavBar />
      <MobileNavbar />
      { showSidebar && <Sidebar />}
    </header>
  );

};

export default Navbar;