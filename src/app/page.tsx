"use client";

import Head from 'next/head';
import React from 'react';
import { useRef } from 'react';

const HomePage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <React.Fragment>
        <title>{"Asaf Meizner's website"}</title>
      </React.Fragment>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div ref={divRef} className="content">
          <h1 className="heading" style={{ textAlign: 'center', marginBottom: '5px', fontSize: '48px', color: "white "}}>Main Page</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" title="rick role" allowFullScreen={true}></iframe>
        </div>
      </div>
    </>
  );
};

export default HomePage;