"use client";

import { useRef } from 'react';

const HomePage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div ref={divRef} className="content">
          <h1 className="heading" style={{ textAlign: 'center', marginBottom: '5px', fontSize: '48px', color: "white "}}>Main Page</h1>
          {/* <video ref={videoRef} width="320" height="240" controls>
          <source ref={sourceRef} src="../rickrole.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
          </video> */}
          {/* iframe for this video "https://www.youtube.com/watch?v=dQw4w9WgXcQ" */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" title="rick role" allowFullScreen={true}></iframe>
        </div>
      </div>
    </>
  );
};

export default HomePage;