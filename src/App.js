import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="id"
          value={id}
          type="text"
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          placeholder="pw"
          value={pw}
          type="password"
          onChange={(e) => setPw(e.target.value)}
        ></input>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default App;
