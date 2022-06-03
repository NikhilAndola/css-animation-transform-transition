import React from 'react';
import './styling/spinner.css';

export const Spinner = () => {
  return (
    <div>
      <div>
        <h3>Loading spinner</h3>
      </div>
      <div class="parent">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
