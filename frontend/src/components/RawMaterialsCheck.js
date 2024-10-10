import React from 'react';

function RawMaterialsCheck({ onCheck, materialAvailable, onAssign }) {
  return (
    <div>
      <button onClick={onCheck}>Check Availability</button>
      {materialAvailable !== null && (
        <div>
          <p>Material Available: {materialAvailable ? 'Yes' : 'No'}</p>
          {materialAvailable && (
            <button onClick={onAssign}>Assign to Process</button>
          )}
        </div>
      )}
    </div>
  );
}

export default RawMaterialsCheck;