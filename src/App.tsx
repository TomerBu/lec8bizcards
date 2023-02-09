import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api/auth/signin", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: "Batman@gmail.com",
        password: "123456aA!",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;