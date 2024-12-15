'use client'

import React from "react";

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <html>
      <body>
        <h2>Global Error {error.message || error.digest}</h2>
      </body>
    </html>
  );
};

export default GlobalError;
