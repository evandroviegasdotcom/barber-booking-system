"use  client";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({  } as { inView: boolean });

export function HeroIntersectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inView, setInView] = useState(true);

  const callback = () => {
    if (window.scrollY > 150) {
      setInView(false);
    } else  {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", callback);
    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return <Context.Provider value={{ inView }}>{children}</Context.Provider>;
}

export function useHeroIntersectionContext() {
  return useContext(Context);
}
