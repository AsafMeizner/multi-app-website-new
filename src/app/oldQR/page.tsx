"use client"

import React, { useState } from 'react';
import QRCode from 'qrcode';
import { toast } from 'react-toastify';

const QRgen = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = async () => {
    try {
      const options = {
        color: { dark: color, light: backgroundColor },
      };

      const qrCodeDataUrl = await QRCode.toDataURL(text, options);
      setQrCode(qrCodeDataUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast.error('Error generating QR code', { theme: 'dark' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ color: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '0px', fontSize: '48px' }}>QR Code Generator</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="text"
            value={text}
            placeholder="Text for QR code"
            onChange={(e) => setText(e.target.value)}
            style={{color: 'white', marginRight: '10px', marginBottom: '5px', marginTop: '5px', backgroundColor: 'rgb(30, 31, 34)', padding: '10px', borderRadius: '5px', border: 'none'}}
          />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ margin: '5px' }}
          />
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            style={{ margin: '5px' }}
          />
        </div>
      </div>
      <button className="purpleButton" style={{ marginTop: '5px' }} onClick={generateQrCode}>
        Generate QR Code
      </button>
      {qrCode && (
        <div style={{ marginTop: '20px' }}>
          <img src={qrCode} alt="QR Code" style={{ width: '200px', height: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default QRgen;