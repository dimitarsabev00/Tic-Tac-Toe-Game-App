import "./App.scss";

import { Board } from "./components";

const App = () => {
  return (
    <div className="container-game">
      <h1 className="title">
        Tic-Tac-Toe Game <span>App</span>
      </h1>
      <Board />
    </div>
  );
};

export default App;
