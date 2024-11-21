import { RouterProvider } from 'react-router-dom';
import './App.scss';

import router from './routes';

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} future={{v7_startTransition: true}} />
    </div>
  );
}

export default App;
