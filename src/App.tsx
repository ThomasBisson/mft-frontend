import './App.scss';
import MennuPlanner from './modules/menuPlanner/MenuPlanner';

import MainLayout from './shared/components/structures/MainLayout';

function App() {
  return (
    <div className="app">
      <MainLayout>
        <MennuPlanner />
      </MainLayout>
    </div>
  );
}

export default App;
