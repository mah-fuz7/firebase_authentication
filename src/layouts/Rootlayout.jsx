 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Rootlayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-1'>
<Outlet></Outlet>
            </main>
            <Footer ></Footer>
        </div>
    );
};

export default Rootlayout;