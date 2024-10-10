// frontend/src/components/ProcessForm.js
import React, { useState } from 'react';

function ProcessForm({ onSubmit, quantityGiven }) {
  const [quantityReturned, setQuantityReturned] = useState('');
  const [quantityDestroyed, setQuantityDestroyed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantityReturned === '' || quantityDestroyed === '') {
      alert('Please enter quantities.');
    } else {
      onSubmit({
        quantity_returned: parseInt(quantityReturned),
        quantity_destroyed: parseInt(quantityDestroyed),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Process Task</h2>
      <p>Quantity Given: {quantityGiven}</p>
      <label>
        Quantity Returned:
        <input
          type="number"
          value={quantityReturned}
          onChange={(e) => setQuantityReturned(e.target.value)}
          required
        />
      </label>
      <label>
        Quantity Destroyed:
        <input
          type="number"
          value={quantityDestroyed}
          onChange={(e) => setQuantityDestroyed(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProcessForm;