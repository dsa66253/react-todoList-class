import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
        {/* <TodoList /> */}
        <div>
        <label>write a note</label>
        <input placeholder='write a note'></input>
        <button>add</button>
        </div>
        <li className='finish'>web app intro.</li>
        <li className='finish'>react</li>
        <li>CSS</li>
        

    </div>
  );
}

export default App;
