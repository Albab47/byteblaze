
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='h-16'>
              <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;