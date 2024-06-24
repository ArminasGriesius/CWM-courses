import React, { FormEvent } from "react";

function App() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
