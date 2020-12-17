import React from 'react';
import styles from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { TodoActions } from './slices/todo';
import { nanoid } from 'nanoid';

// https://github.com/chrisachard/redux-toolkit-example/blob/main/src/index.js

function App() {
  const [task, setTask] = React.useState('');
  const todos = useSelector(state => state.todo.data);
  const dispatch = useDispatch();

  const onAdd = () => dispatch(TodoActions.add({ id: nanoid(), title: task }));
  return (
    <div className={styles.container}>
      <p style={{ margin: '1rem 0' }}>@reduxjs/toolkit</p>
      <div className={styles.flex}>
        <input value={task} onChange={e => setTask(e.target.value)} className={styles.input} type="text" />
        <button onClick={onAdd} className={styles.button}>add</button>
      </div>
      {JSON.stringify(todos, 0, 2)}
      {Object.entries(todos).map((key, todo)=> (
        <p key={key}>{todo}</p>
      ))}
    </div>
  );
}

export default App;
