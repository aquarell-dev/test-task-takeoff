import React, { FC } from 'react';
import { cn } from '../../../../utils';

interface IMessage {
  logo?: React.ReactNode;
  twTextColor?: string;
  twFontSize?: string;
  message: string;
}

const Message: FC<IMessage> = ({ message, logo, twTextColor, twFontSize }) => {
  return (
    <div className='py-50 flex flex-col space-y-5 items-center justify-center'>
      {logo && logo}
      <p className={cn(twTextColor ?? 'text-gray-800', twFontSize ?? 'text-3xl')}>{message}</p>
    </div>
  );
};

export default Message;