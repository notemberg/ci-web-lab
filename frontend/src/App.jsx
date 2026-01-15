import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("/api/hello")
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Frontend</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;