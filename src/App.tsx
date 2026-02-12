// import { Button, DatePicker } from 'antd';
// import _ from 'lodash';
import range from 'lodash/range';
import moment from 'moment';
import Button from 'antd/es/button';
import DatePicker from 'antd/es/date-picker';


function App() {
  const bigArray = range(0, 10000);
  const today = moment().format('YYYY-MM-DD');

  return (
    <div style={{ padding: 24 }}>
      <h1>Vite Bundle Lab</h1>
      <p>Today: {today}</p>
      <Button type="primary">Antd Button</Button>
      <DatePicker />
      <p>Array size: {bigArray.length}</p>
    </div>
  );
}

export default App;
