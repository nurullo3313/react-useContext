import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routing } from './ustils/routing';

function App() {
  return (
      <RouterProvider router={routing}/>
  );
}

export default App;
