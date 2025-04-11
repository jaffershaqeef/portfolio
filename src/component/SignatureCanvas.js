// SignaturePad.js
import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = forwardRef(({
  penColor = 'blue',
  canvasClassName = 'signatureCanvas w-full h-full rounded',
  width = '100%',
  height = '200px',
  backgroundColor = 'white',
  velocityFilterWeight = 0.7,
  minWidth = 0.5,
  maxWidth = 2.5,
  throttle = 16,
  onSave = null, // Callback function when signature is saved
  buttonClassName = 'signature-pad-button',
  showButtons = true,
  buttonContainerClassName = 'signature-pad-buttons',
  ...props
}, ref) => {
  const sigCanvasRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    clear: () => {
      handleClear();
    },
    isEmpty: () => {
      return sigCanvasRef.current?.isEmpty();
    },
    getTrimmedDataURL: (type = 'image/png', encoderOptions) => {
      return sigCanvasRef.current?.getTrimmedCanvas().toDataURL(type, encoderOptions);
    },
    getData: () => {
      return sigCanvasRef.current?.toData();
    },
    fromData: (data) => {
      sigCanvasRef.current?.fromData(data);
    }
  }));

  const canvasProps = {
    className: canvasClassName,
    style: {
      width,
      height,
      backgroundColor,
      touchAction: 'none', // Prevents default touch actions like scrolling
      ...props.style
    },
    onEnd: () => {
      setIsEmpty(sigCanvasRef.current?.isEmpty());
    }
  };

  const options = {
    velocityFilterWeight,
    minWidth,
    maxWidth,
    throttle,
    penColor
  };

  const handleClear = () => {
    sigCanvasRef.current?.clear();
    setIsEmpty(true);
  };

  const handleSave = () => {
    if (sigCanvasRef.current?.isEmpty()) {
      alert('Please provide a signature');
      return;
    }
    
    const signatureDataURL = sigCanvasRef.current?.getTrimmedCanvas().toDataURL();
    if (onSave && typeof onSave === 'function') {
      onSave(signatureDataURL);
    }
  };

  return (
    <div className="signature-pad-container">
      <SignatureCanvas
        ref={sigCanvasRef}
        penColor={penColor}
        canvasProps={canvasProps}
        options={options}
        {...props}
      />
      
      {showButtons && (
        <div className={buttonContainerClassName} style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button 
            className={buttonClassName} 
            onClick={handleClear}
            style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}
          >
            Clear
          </button>
          <button 
            className={buttonClassName} 
            onClick={handleSave}
            disabled={isEmpty}
            style={{ 
              padding: '8px 16px', 
              borderRadius: '4px', 
              backgroundColor: isEmpty ? '#cccccc' : '#4a90e2', 
              color: isEmpty ? '#666666' : 'white',
              border: '1px solid #ccc'
            }}
          >
            Save Signature
          </button>
        </div>
      )}
    </div>
  );
});

SignaturePad.displayName = 'SignaturePad';

export default SignaturePad;