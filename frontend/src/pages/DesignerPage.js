import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDesignByEnquiryId, uploadDesign } from '../services/designerService';
import '../styles/DesignerUpload.css';  // Import the CSS file

function DesignerPage() {
  const { enquiryId } = useParams();
  const [design, setDesign] = useState(null);

  useEffect(() => {
    // Fetch design by enquiry ID when the component loads
    getDesignByEnquiryId(enquiryId)
      .then(response => setDesign(response.data))
      .catch(error => console.error('Error fetching design:', error));
  }, [enquiryId]);

  const handleDesignUpload = (file) => {
    uploadDesign(enquiryId, file)
      .then(response => {
        alert('Design uploaded successfully!');
        setDesign(response.data);  // Update design state after upload
      })
      .catch(error => {
        console.error('Error uploading design:', error);
        alert('Failed to upload design.');
      });
  };

  return (
    <div className="designer-container">
      <div className="glass-designer-card">
        <h1>Designer Page</h1>
        {design ? (
          <div className="design-info">
            <h2>Uploaded Design</h2>
            <p>Design file path: {design.design_file}</p>
          </div>
        ) : (
          <p className="design-info">No design uploaded yet.</p>
        )}
        {/* File upload form */}
        <input type="file" onChange={(e) => handleDesignUpload(e.target.files[0])} />
        <button onClick={() => alert('Uploading design...')}>Upload</button>
      </div>
    </div>
  );
}

export default DesignerPage;