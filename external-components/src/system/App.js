
import './App.css';

import Background from "../components/Background"
import Icon from "../components/Icon"

function App() {
  return (
    <div className="App">
      <h1>组件开发 DEMO</h1>

      <div style={{ marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
        <h3>组件: Background</h3>
        <div style={{ marginTop: 10 }}>
          <Background backgroundColor={"#ffcc00"} />
        </div>
      </div>

      <div style={{ marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.15)" }}>
        <h3>组件: Icon</h3>
        <div style={{ marginTop: 10 }}>
          <Icon type={"LinkOutlined"} linkTo="/abc" />
        </div>
      </div>
    </div>
  );
}

export default App;
