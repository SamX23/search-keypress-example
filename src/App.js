import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [keyboardClick, setKeyboardClick] = useState({
    ctrl: null,
    k: null,
  });

  const controlKeyListener = () => {
    document.addEventListener("keydown", (e) => {
      if (!e.repeat) {
        if (e.key === "Control") {
          console.log(e.key);
          setKeyboardClick({ ...keyboardClick, ctrl: true });
        }
      }
    });
  };

  const kKeyListener = () => {
    document.addEventListener("keydown", (e) => {
      if (!e.repeat) {
        if (e.key === "k") {
          console.log(e.key);
          setKeyboardClick({ ...keyboardClick, k: e.key });
        }
      }
    });
  };

  useEffect(() => {
    controlKeyListener();
    kKeyListener();
  }, []);

  return (
    <div className="App">
      <h1>Click CTRL + K to open search bar.</h1>
    </div>
  );
}

export default App;
