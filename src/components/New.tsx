  import React from 'react';
  import './css/video.css';

  
  export function New({ children }: { children: React.ReactNode }) {
    return <div className="tile new">{children}</div>;
  }