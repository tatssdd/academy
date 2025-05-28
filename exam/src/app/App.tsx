import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '../app/routes';
import { NavBar } from '../components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
