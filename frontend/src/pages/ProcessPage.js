// frontend/src/pages/ProcessPage.js
import React, { useEffect, useState } from 'react';
import ProcessForm from '../components/ProcessForm';
import { getProcessTask, updateProcessTask } from '../services/processService';
import { useParams, useNavigate } from 'react-router-dom';

function ProcessPage() {
  const { enquiryId } = useParams();
  const history = useNavigate();
  const [processTask, setProcessTask] = useState(null);

  useEffect(() => {
    getProcessTask(enquiryId)
      .then((response) => {
        setProcessTask(response.data);
      })
      .catch((error) => {
        console.error('Error fetching process task:', error);
        alert('Failed to fetch process task.');
      });
  }, [enquiryId]);

  const handleProcessSubmit = (data) => {
    updateProcessTask(processTask.id, data)
      .then((response) => {
        const quantitiesMatch =
          response.data.quantity_given ===
          response.data.quantity_returned + response.data.quantity_destroyed;

        if (quantitiesMatch) {
          alert('Process completed successfully!');
          history.push('/');
        } else {
          alert('Quantities do not match. Generating revised order.');
          // Handle revised order logic here
          history.push(`/order-confirmation/${enquiryId}`);
        }
      })
      .catch((error) => {
        console.error('Error updating process task:', error);
        alert('Failed to update process task.');
      });
  };

  if (!processTask) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProcessForm
        onSubmit={handleProcessSubmit}
        quantityGiven={processTask.quantity_given}
      />
    </div>
  );
}

export default ProcessPage;