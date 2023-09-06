import { ScrollRestoration, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layouts/Layout';
import Loading from './pages/Loading/Loading';
function App() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  return loading ? (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  ) : (
    <div
      onLoad={() =>
        setTimeout(() => {
          navigate('/home');
          setloading(true);
        }, 2000)
      }
    >
      <Loading />
    </div>
  );
}

export default App;
