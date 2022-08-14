import { useDispatch } from 'react-redux';
import { userActions } from '../store/user/user.slice';
import { bindActionCreators } from '@reduxjs/toolkit';

const actions = {
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};