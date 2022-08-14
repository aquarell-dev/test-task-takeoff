import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => {
  const user = useTypedSelector(state => state.user);

  return {
    authenticated: !!user.id,
    ...user
  }
};