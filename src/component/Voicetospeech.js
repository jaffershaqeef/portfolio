import React, { useRef, useState } from "react";
import SignaturePad from "./SignatureCanvas";

// Check for SpeechRecognition support
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const signatureRef = useRef(null);

  // Start speech recognition
  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };

  // Stop speech recognition
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  // Capture the result
  if (recognition) {
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  return (
    <div id="speech" style={{ padding: "20px" }} className="mb-10">
      <h2>Speech to Text</h2>
      <p>{transcript || "Start speaking to see the transcript"}</p>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "Stop" : "Start"} Listening
      </button>
      <div className="container">
      <h2>Signature Pad</h2>
      
      <div style={{ height: '200px', border: '1px solid #ccc' }}>
        <SignaturePad 
          ref={signatureRef}
          penColor="blue"
          backgroundColor="#f5f5f5"
        />
      </div>
      
    
    </div>

    </div>
  );
};

export default SpeechToText;
