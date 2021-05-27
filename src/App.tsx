
import { useSelector } from 'react-redux';
import './App.css';
import Table from './components/Table';
import { TaskItem, TaskList } from './interfaces/task';

function App() {
  const list:TaskList<TaskItem> = [
    { 
      id:'01',
      description:'Hello world',
      created_at:new Date(),
      expiration_date:new Date()
    },
  ];
  return (
    <div className="App">
      <Table data={list}></Table>
    </div>
  );
}

export default App;
