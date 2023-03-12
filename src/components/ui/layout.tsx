import Head from "next/head";
import React from "react";
import NavBar from "./navBar";
import { LayoutProps } from "@/interfaces";

const Layout = ({
  children,
  title = "App",
  background = "bg-white",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | Movies Search</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="movies, movie, films, film, search, movies-search, best movies"
        />
        <meta name="description" content="This is movies search application" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
