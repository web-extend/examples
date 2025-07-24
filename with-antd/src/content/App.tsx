import './App.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

function App() {
  return (
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="primary"
      tooltip={<div>Hello</div>}
    />
  );
}

export default App;
