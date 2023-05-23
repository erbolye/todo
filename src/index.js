import React from 'react';
import ReactDom from 'react-dom/client';


// React компоненты

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';

import FilterButtons from './components/filter-buttons';

import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Build awesome app', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchBar />
      <FilterButtons />
      <TodoList todos={todoData} />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)
