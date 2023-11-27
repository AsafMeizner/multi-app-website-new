// src/app/YoutubeDownloader/page.tsx
"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const YoutubeDownloader = () => {
  const [url, setUrl] = useState('');

  const downloadVideo = async () => {
	try {
	  const response = await fetch('/YoutubeDownloader/api/download', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  url,
		  type: 'video',
		}),
	  });

	  if (response.ok) {
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'video.mp4';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	  } else {
		alert('Error downloading video');
	  }
	} catch (error) {
	  console.error('Error:', error);
	  alert('An error occurred');
	}
  };

  const downloadSound = async () => {
	try {
	  const response = await fetch('/YoutubeDownloader/api/download', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  url,
		  type: 'sound',
		}),
	  });

	  if (response.ok) {
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'audio.mp3';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	  } else {
		alert('Error downloading audio');
	  }
	} catch (error) {
	  console.error('Error:', error);
	  alert('An error occurred');
	}
  };

  return (
	<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
	<Link legacyBehavior href="/">
      <a style={{color: 'white', position: 'absolute', top: '10px', left: '10px'}}>Home</a>
      </Link>   
	  <div style={{ color: 'white', textAlign: 'center' }}>
		<h1 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '48px' }}>YouTube Downloader</h1>
		<input
		  type="text"
		  value={url}
		  onChange={(e) => setUrl(e.target.value)}
		  placeholder="Enter YouTube URL"
		  style={{color: 'white', marginRight: '10px', marginBottom: '10px', backgroundColor: 'rgb(30, 31, 34)', padding: '10px', borderRadius: '5px', border: 'none'}}
		/>
	  </div>
	  <div style={{ display: 'flex', gap: '10px' }}> {/* Added div for buttons */}
		<button className="purpleButton" onClick={downloadVideo} style={{ marginRight: '10px' }}>
		  Download Video
		</button>
		<button className="purpleButton" onClick={downloadSound}>
		  Download MP3
		</button>
	  </div>
	</div>
  );
};

export default YoutubeDownloader;
