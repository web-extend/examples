import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

function App() {
  return (
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="primary"
      tooltip={<div>Hello World</div>}
    />
  );
}

export default App;
