"use client";

import React, { useState, useRef, useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { toast } from 'react-toastify';

type QRStyle = 'squares' | 'dots';
type LogoPaddingStyle = 'square' | 'circle';

interface CornerRadii {
  topLeft?: number;
  topRight?: number;
  bottomLeft?: number;
  bottomRight?: number;
}

interface EyeColor {
  outer: string;
  inner: string;
}

const QRgen = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [logo, setLogo] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [qrStyle, setQrStyle] = useState<QRStyle>('squares');
  const [logoOpacity, setLogoOpacity] = useState(1);
  const [removeQrCodeBehindLogo, setRemoveQrCodeBehindLogo] = useState(false);
  const [logoPadding, setLogoPadding] = useState(0);
  const [logoPaddingStyle, setLogoPaddingStyle] = useState<LogoPaddingStyle>('square');
  const [eyeRadius, setEyeRadius] = useState<CornerRadii>({});
  const [eyeColor, setEyeColor] = useState<EyeColor>({ outer: '#000000', inner: '#ffffff' });

  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (text) {
      setQrCode(text);
    }
  }, [text]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const logoDataUrl = event.target?.result?.toString() ?? '';
        setLogo(logoDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadQrCode = () => {
    const qrCodeSvg = document.getElementById('qr-code-svg');
    const svgString = new XMLSerializer().serializeToString(qrCodeSvg as Node);

    const dataUri = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;

    const a = document.createElement('a');
    a.href = dataUri;
    a.download = 'qrcode.svg';
    a.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ color: 'white', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '0px', fontSize: '48px' }}>QR Code Generator</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflowY: 'auto', maxHeight: 'calc(100vh - 150px)' }}>
          <div style={{ margin: '5px' }}>
            <label>
              Text for QR code:
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  color: 'white',
                  backgroundColor: 'rgb(30, 31, 34)',
                  padding: '10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </label>
          </div>
          <div style={{ margin: '5px' }}>
            <label>
              Line color:
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  backgroundColor: 'rgb(30, 31, 34)',
                  padding: '10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </label>
          </div>
          <div style={{ margin: '5px' }}>
            <label>
              Background color:
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                style={{
                  backgroundColor: 'rgb(30, 31, 34)',
                  padding: '10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              />
            </label>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={logoInputRef}
            onChange={handleLogoChange}
            style={{
              margin: '5px',
              backgroundColor: 'rgb(30, 31, 34)',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
            }}
          />
          <label style={{ color: 'white', margin: '5px' }}>
            QR Code Design:
            <select
              value={qrStyle}
              onChange={(e) => setQrStyle(e.target.value as QRStyle)}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
              }}
            >
              <option value="squares">Squares</option>
              <option value="dots">Dots</option>
            </select>
          </label>
          <label style={{ color: 'white', margin: '5px' }}>
            Logo Opacity:
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={logoOpacity}
              onChange={(e) => setLogoOpacity(parseFloat(e.target.value))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
            {logoOpacity}
          </label>
          <label style={{ color: 'white', margin: '5px' }}>
            Remove QR Code Behind Logo:
            <input
              type="checkbox"
              checked={removeQrCodeBehindLogo}
              onChange={() => setRemoveQrCodeBehindLogo(!removeQrCodeBehindLogo)}
              style={{
                margin: '5px',
              }}
            />
          </label>
          <label style={{ color: 'white', margin: '5px' }}>
            Logo Padding:
            <input
              type="number"
              min="0"
              value={logoPadding}
              onChange={(e) => setLogoPadding(parseInt(e.target.value, 10))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
          </label>
          <label style={{ color: 'white', margin: '5px' }}>
            Logo Padding Style:
            <select
              value={logoPaddingStyle}
              onChange={(e) => setLogoPaddingStyle(e.target.value as LogoPaddingStyle)}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            >
              <option value="square">Square</option>
              <option value="circle">Circle</option>
            </select>
          </label>
          <label style={{ color: 'white', margin: '5px' }}>
            Eye Radius (Top Left, Top Right, Bottom Left, Bottom Right):
            <input
              type="number"
              min="0"
              value={eyeRadius.topLeft ?? ''}
              onChange={(e) => setEyeRadius((prev) => ({ ...prev, topLeft: parseInt(e.target.value, 10) }))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
            <input
              type="number"
              min="0"
              value={eyeRadius.topRight ?? ''}
              onChange={(e) => setEyeRadius((prev) => ({ ...prev, topRight: parseInt(e.target.value, 10) }))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
            <input
              type="number"
              min="0"
              value={eyeRadius.bottomLeft ?? ''}
              onChange={(e) => setEyeRadius((prev) => ({ ...prev, bottomLeft: parseInt(e.target.value, 10) }))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
            <input
              type="number"
              min="0"
              value={eyeRadius.bottomRight ?? ''}
              onChange={(e) => setEyeRadius((prev) => ({ ...prev, bottomRight: parseInt(e.target.value, 10) }))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
          </label>
          <label style={{ color: 'white', margin: '5px' }}>
            Eye Color (Outer, Inner):
            <input
              type="color"
              value={eyeColor.outer}
              onChange={(e) => setEyeColor((prev) => ({ ...prev, outer: e.target.value }))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
            <input
              type="color"
              value={eyeColor.inner}
              onChange={(e) => setEyeColor((prev) => ({ ...prev, inner: e.target.value }))}
              style={{
                backgroundColor: 'rgb(30, 31, 34)',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '5px',
              }}
            />
          </label>
          <button
            className="purpleButton"
            style={{
              marginTop: '5px',
              backgroundColor: 'rgb(30, 31, 34)',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
            }}
            onClick={downloadQrCode}
          >
            Download QR Code
          </button>
        </div>
      </div>
      {qrCode && (
        <div style={{ marginTop: '20px', position: 'relative' }}>
          <QRCode
            id="qr-code-svg"
            value={text}
            bgColor={backgroundColor}
            fgColor={color}
            size={300}
            logoImage={logo}
            logoWidth={80}
            logoHeight={80}
            qrStyle={qrStyle}
            logoOpacity={logoOpacity}
            removeQrCodeBehindLogo={removeQrCodeBehindLogo}
            logoPadding={logoPadding}
            logoPaddingStyle={logoPaddingStyle}
            // eyeRadius={eyeRadius}
            eyeColor={eyeColor}
          />
        </div>
      )}
    </div>
  );
};

export default QRgen;