import { FC } from 'react';
import Button from '../../../../ui/Button';
import { useNavigate } from 'react-router-dom';

const NotSignedIn: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='flex py-10 justify-center flex-col space-y-5 items-center'>
      <p className='text-3xl'>In order to see your contacts you have to first log in</p>
      <div className='flex flex-row space-x-4'>
        <Button text={'Register'} color={'default'} handler={() => navigate('/auth/register')}/>
        <Button text={'Sign in'} color={'default'} handler={() => navigate('/auth/login')}/>
      </div>
    </div>
  );
};

export default NotSignedIn;