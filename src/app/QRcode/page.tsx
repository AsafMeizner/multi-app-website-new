"use client"

import React, { useState } from 'react';
import { generateCustomQRCode } from './server';

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [data, setData] = useState('');
  const [customization, setCustomization] = useState({
    body: 'square',
    eye: 'frame0',
    eyeBall: 'ball0',
    erf1: [],
    erf2: [],
    erf3: [],
    brf1: [],
    brf2: [],
    brf3: [],
    bodyColor: '#000000',
    bgColor: '#ffffff',
    eye1Color: '#000000',
    eye2Color: '#000000',
    eye3Color: '#000000',
    eyeBall1Color: '#000000',
    eyeBall2Color: '#000000',
    eyeBall3Color: '#000000',
    gradientColor1: null,
    gradientColor2: null,
    gradientType: 'linear',
    gradientOnEyes: false,
    logo: null,
    logoMode: 'default',
  });

  const generateQRCode = async () => {
    const result = await generateCustomQRCode(data, customization);

    if (result.success) {
      setQrCode(result.data || null);
    } else {
      console.error('Failed to generate QR code:', result.error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ color: 'white', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '48px' }}>Custom QR Code Generator</h1>
        <div style={{ textAlign: 'center' }}>
          <label style={{ marginRight: '10px' }}>
            Data:
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} style={{ color: 'white', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: 'rgb(30, 31, 34)', margin: '10px 0' }} />
          </label>
        </div>
      </div>

      {/* Add customization options here */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', color: 'white', margin: '10px 0' }}>Customization Options</h2>
        {/* Customize body, eye, eyeBall, erf1, erf2, ... */}
      </div>

      <button className='purpleButton' onClick={generateQRCode} style={{ margin: '20px 0' }}>Generate QR Code</button>

      {qrCode && <img src={`data:image/svg+xml;base64,${qrCode}`} alt="Custom QR Code" />}
    </div>
  );
};

export default QrCodeGenerator;