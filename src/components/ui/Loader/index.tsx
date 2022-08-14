import { FC } from 'react';
import { InfinitySpin } from  'react-loader-spinner';

const Loader: FC = () => {
  return <div className='flex justify-center items-center py-40'>
    <InfinitySpin color='black' />
  </div>;
};

export default Loader;