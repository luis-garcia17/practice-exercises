"use client";

import { createContext, useContext, useState, ReactNode, FC } from "react";

 const linksData: LinkData[] = [
    {
      id: 1,
      text: "Javascript",
      href: "/javascript",
      description:
        "Javascript challenges, these are going to be done with React and Typescript too",
    },
    {
      id: 2,
      text: "CSS",
      href: "/css",
      description:
        "CSS exercises, most of these are going to be done using SASS and no frameworks",
    },
    {
      id: 3,
      text: "Typescript",
      href: "/typescript",
      description:
        "Incorporate typescript with other technologies, don't just use it on its own",
    },
    {
      id: 4,
      text: "React",
      href: "/react",
      description:
        "Hooks, state management and a lot of other reacty stuff!",
    },
    {
      id: 5,
      text: "Algorithms",
      href: "/algorithms",
      description:
        "Solve these, ace your next interview and land a job!",
    },
  ];

export type LinkData = {
  id: number,
  text: string,
  href: string,
  description: string,
}

type LinksType = {
  links: LinkData[],
  setLinks: React.Dispatch<React.SetStateAction<LinkData[]>>,
}

type Props = {
  children: ReactNode;
}

const LinksContext = createContext<LinksType>({} as LinksType);

const LinksProvider: FC<Props> = ({ children }: Props) => {
  const [links, setLinks] = useState<LinkData[]>(linksData);

  return (
    <LinksContext.Provider
     value={{ 
      links, 
      setLinks, 
       }}>

      {" "}
      {children}{" "}

    </LinksContext.Provider>
  );
};

/* Manipulate state in components */
export const useLinks = () => useContext(LinksContext); 

export default LinksProvider;