
import React, { useState } from "react";

function App({ name = "Student" }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>This is a toggleable message using React state.</p>}
    </div>
  );
}

export default App;
