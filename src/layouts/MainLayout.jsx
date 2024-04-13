import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// css file imported for toastify notifications
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* wrapper for layout is positioned absolute */}
      <ToastContainer />
    </>
  );
};
export default MainLayout;