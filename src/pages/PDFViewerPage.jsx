import React from 'react';
import { useParams } from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PDFViewerPage() {
    const { file } = useParams();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // Correct file paths
    const pdfFiles = {
        annual: process.env.PUBLIC_URL + '/uploads/SEED ANNUAL REPORT.pdf',
    };

    const fileUrl = pdfFiles[file];

    if (!fileUrl) {
        return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>PDF not found</h2>;
    }

    return (
        <div style={{ height: '100vh', background: '#f5f5f5' }}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </div>
    );
}
