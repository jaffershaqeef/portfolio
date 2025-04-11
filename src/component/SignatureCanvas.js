import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = forwardRef(({ onSave }, ref) => {
  const sigCanvas = useRef(null);
  const [signatureURL, setSignatureURL] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);

  // Expose methods to parent (optional)
  useImperativeHandle(ref, () => ({
    clear: handleClear,
    save: handleSave,
    getDataURL: () => signatureURL,
  }));

  const handleClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setIsEmpty(true);
      setSignatureURL(null);
    }
  };

  const handleSave = () => {
    if (!sigCanvas.current) {
      console.error("Signature canvas reference is not available");
      return;
    }
    
    if (sigCanvas.current.isEmpty()) {
      alert('Please provide a signature');
      return;
    }
    
    try {
      // Use toDataURL directly instead of getTrimmedCanvas
      const dataURL = sigCanvas.current.getCanvas().toDataURL('image/png');
      console.log('Saving signature data URL:', dataURL.substring(0, 50) + '...');
      setSignatureURL(dataURL);

      if (onSave) onSave(dataURL);
    } catch (error) {
      console.error("Error saving signature:", error);
    }
  };

  const handleEnd = () => {
    if (sigCanvas.current) {
      setIsEmpty(sigCanvas.current.isEmpty());
    }
  };

  // Optional: Prevent mobile scrolling
  useEffect(() => {
    if (!sigCanvas.current) return;
    
    const canvas = sigCanvas.current.getCanvas();
    if (!canvas) return;
    
    const preventTouch = (e) => e.preventDefault();
    canvas.addEventListener('touchstart', preventTouch, { passive: false });
    canvas.addEventListener('touchmove', preventTouch, { passive: false });

    return () => {
      canvas.removeEventListener('touchstart', preventTouch);
      canvas.removeEventListener('touchmove', preventTouch);
    };
  }, []);

  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        backgroundColor="white"
        onEnd={handleEnd}
        canvasProps={{
          width: 500,
          height: 200,
          className: 'sigCanvas',
          style: {
            border: '1px solid #ccc',
            borderRadius: '4px',
            touchAction: 'none',
          },
        }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={handleClear} style={{ marginRight: 10 }}>
          Clear
        </button>
        <button onClick={handleSave} disabled={isEmpty}>
          Save
        </button>
      </div>

      {signatureURL && (
        <div style={{ marginTop: 20 }}>
          <p>Saved Signature:</p>
          <img
            src={signatureURL}
            alt="signature"
            style={{ maxHeight: '120px' }}
          />
        </div>
      )}
    </div>
  );
});

SignaturePad.displayName = 'SignaturePad';

export default SignaturePad;