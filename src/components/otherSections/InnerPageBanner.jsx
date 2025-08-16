import React from 'react';
// import './InnerPageBanner.css';

const InnerPageBanner = ({ title, background, breadcrumb }) => {
  return (
    <div
      className="inner-banner"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="inner-banner-overlay">
        <h2>{title}</h2>
        {breadcrumb && <p className="breadcrumb">{breadcrumb}</p>}
      </div>
    </div>
  );
};

export default InnerPageBanner;
