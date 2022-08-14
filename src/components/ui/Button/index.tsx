import { FC } from 'react';
import { cn } from '../../../utils';

const Button: FC<{
  text: string,
  handler?: () => void;
  color: 'default' | 'green' | 'red';
  twSizes?: string;
  type?: 'button' | 'reset' | 'submit'
}> = ({ text, handler, color, twSizes, type }) => {
  return (
    <button
      onClick={handler}
      type={type ?? 'button'}
      className={cn(
        'cursor-pointer py-2 px-4 flex items-center justify-center text-[16px] rounded-lg transition-colors transition-duration-300',
        twSizes ?? 'w-28 h-8',
        color === 'default' ? 'bg-gray-100 hover:bg-gray-200' : color === 'green' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600')}
    >
      {text}
    </button>
  );
};

export default Button;