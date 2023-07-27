import { ScrollRestoration, Outlet } from 'react-router-dom';
import Layout from './components/Layouts/Layout';

function App() {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
}

export default App;
