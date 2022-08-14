import { FC } from 'react';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { useActions } from '../../../../hooks/useActions';

const AuthBar: FC = () => {
  const { authenticated, login } = useAuth();

  const navigate = useNavigate();

  const { logOut } = useActions();

  return (
    <div className='flex justify-center space-x-4 text-3xl items-center'>
      {authenticated ? (
        <>
          <p className='text-gray-700 font-semibold text-lg'>{login}</p>
          <div className='rounded-full h-8 w-8 bg-red-100 flex items-center justify-center'>A</div>
          <Button text='Log out' color='red' handler={() => logOut()}/>
        </>
      ) : (
        <div className='flex space-x-4 items-center'>
          <Button text='Sign in' color='green' handler={() => navigate('/auth/login')}/>
          <Button text={'Register'} color={'default'} handler={() => navigate('/auth/register')}/>
        </div>
      )}
    </div>
  );
};

export default AuthBar;