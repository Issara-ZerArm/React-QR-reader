import React, { useState } from 'react';
import './App.css';

import { QrReader } from 'react-qr-reader';


function App() {

  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const handleErrorWebCam = (error) => {
    console.error(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  }

  return (
    <div className="App">

      <h3>Qr Code Scan by Web Cam</h3>
      <QrReader
        delay={300}
        style={{ width: '100%' }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />
      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
    </div>
  );
}

export default App;
