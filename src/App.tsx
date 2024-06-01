import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEditList from './components/AddEditList.tsx';
import ShowList from './components/ShowLists.tsx';
import { List } from './types/ToDoLists.ts';
import './App.css'
import { useState } from 'react';

function App() {  
  const [todoList, setTodoList] = useState<List[]>([]);
  return (
    <>
      <header>
        <h1>ToDo List</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
              <Route path='/list' element={<AddEditList todoList={todoList} setTodoList={setTodoList} />} />
              <Route path='/' element={<ShowList todoList={todoList} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
