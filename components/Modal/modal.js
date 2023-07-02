import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.3)',
      zIndex: 1000, 
    }}>
      <div style={{
        padding: 20,
        background: '#fff',
        borderRadius: '10px', // make corners round
        border: '2px solid #007BFF', // add colored border
        display: 'inline-block',
        minHeight: '300px',
        margin: '1rem',
        position: 'relative',
        minWidth: '300px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        justifySelf: 'center',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          right: 20,
          top: 20,
          background: 'transparent',
          border: 'none',
          fontSize: '1.5em',
        }}>×</button>

        <div style={{ marginTop: '4em' }}></div> {/* Add space after X button */}
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
