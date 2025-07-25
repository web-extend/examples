import { useState } from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="content">
      <p>Count: {count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
