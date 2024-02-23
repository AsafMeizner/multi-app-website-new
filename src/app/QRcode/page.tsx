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

  const handleCustomizationChange = (key: string, value: string) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
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

      {/* Customization Options */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', color: 'white', margin: '10px 0' }}>Customization Options</h2>

        {/* Body Style */}
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Body Style:
          <select value={customization.body} onChange={(e) => handleCustomizationChange('body', e.target.value)}>
            <option value="square">Square</option>
            <option value="circle">Circle</option>
            {/* Add other body styles here */}
          </select>
        </label>

        {/* Eye Style */}
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Eye Style:
          <select value={customization.eye} onChange={(e) => handleCustomizationChange('eye', e.target.value)}>
            <option value="frame0">Frame 0</option>
            <option value="frame1">Frame 1</option>
            {/* Add other eye styles here */}
          </select>
        </label>

        {/* EyeBall Style */}
        <label style={{ color: 'white', marginBottom: '10px' }}>
          EyeBall Style:
          <select value={customization.eyeBall} onChange={(e) => handleCustomizationChange('eyeBall', e.target.value)}>
            <option value="ball0">Ball 0</option>
            <option value="ball1">Ball 1</option>
            {/* Add other eyeBall styles here */}
          </select>
        </label>

        {/* Body Color */}
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Body Color:
          <input type="color" value={customization.bodyColor} onChange={(e) => handleCustomizationChange('bodyColor', e.target.value)} />
        </label>

        {/* Background Color */}
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Background Color:
          <input type="color" value={customization.bgColor} onChange={(e) => handleCustomizationChange('bgColor', e.target.value)} />
        </label>

        {/* Other customization options go here */}
      </div>

      <button className='purpleButton' onClick={generateQRCode} style={{ margin: '20px 0' }}>Generate QR Code</button>

      {qrCode && <img src={`data:image/svg+xml;base64,${qrCode}`} alt="Custom QR Code" />}
    </div>
  );
};

export default QrCodeGenerator;