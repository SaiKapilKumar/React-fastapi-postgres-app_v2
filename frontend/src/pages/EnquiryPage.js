import React from 'react';
import EnquiryForm from '../components/EnquiryForm';
import { createEnquiry } from '../services/enquiryService';
import { useNavigate } from 'react-router-dom';
import '../styles/EnquiryPage.css';  // Import the CSS file

function EnquiryPage() {
  const navigate = useNavigate();

  const handleEnquirySubmit = (formData) => {
    createEnquiry(formData)
      .then((response) => {
        const enquiryId = response.data.id;
        alert('Enquiry submitted successfully!');
        navigate(`/designer/${enquiryId}`);  // Navigate to the designer page
      })
      .catch((error) => {
        console.error('Error creating enquiry:', error);
        alert('Failed to submit enquiry.');
      });
  };

  return (
    <div className="enquiry-container">
      <div className="glass-enquiry-card">
        <h1>Submit an Enquiry</h1>
        <EnquiryForm onSubmit={handleEnquirySubmit} />
      </div>
    </div>
  );
}

export default EnquiryPage;