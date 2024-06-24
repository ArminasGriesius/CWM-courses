import React, { FormEvent, useRef } from "react";

function App() {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current) console.log(nameRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
