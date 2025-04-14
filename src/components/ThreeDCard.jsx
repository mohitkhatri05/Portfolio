import React from 'react';
import './ThreeDCard.css'; // Optional: Add styles for the 3D card effect

export const CardContainer = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export const CardItem = ({ children, description ,title}) => {
  return (
    <div className="card-item">{children}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default { CardContainer, CardBody, CardItem };