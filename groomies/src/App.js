import { UserProvider } from './components/UserContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <Nav />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
