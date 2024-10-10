// frontend/src/components/DesignerUpload.js
import React, { useState } from 'react';

function DesignerUpload({ onSubmit }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onSubmit(file);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Design File</h2>
      <input
        type="file"
        accept=".jpg,.jpeg,.pdf"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default DesignerUpload;