
import './App.css';

import Background from "../components/Background"
import Icon from "../components/Icon"

function App() {
  return (
    <div className="App">
      <h1>TODO 组件开发库</h1>

      <div style={{ marginTop: 10 }}>
        <Background backgroundColor={"#ffcc00"} />
      </div>

      <div style={{ marginTop: 10 }}>
        <Icon type={"LinkOutlined"} linkTo="/abc" />
      </div>
    </div>
  );
}

export default App;
