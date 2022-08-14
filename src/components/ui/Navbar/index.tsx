import { FC } from 'react';
import AuthBar from './components/AuthBar';
import { Link } from 'react-router-dom';

const NavigationBar: FC = () => {
  return (
    <div className='flex space-x-2 py-4 justify-between mx-20 items-center'>
      <div className='flex space-x-4 justify-center items-end'>
        <Link to={'/'}><p className='text-xl font-semibold'>Test Task Takeoff</p></Link>
        <Link to={'/contacts'}><p className='text-md text-gray-600 hover:text-gray-800 font-semibold hover:underline transition-duration-300'>Contacts</p>
        </Link>
      </div>
      <AuthBar/>
    </div>
  );
};

export default NavigationBar;