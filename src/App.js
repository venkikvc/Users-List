import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import UserDetails from './User';
import UserList from './UserList';


function App() {
  return (
    <Router>

      <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/User/:id" element={<UserDetails />} />
        </Routes>
    </Router>
    
  );
}

export default App;
