import React, { FormEvent, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
