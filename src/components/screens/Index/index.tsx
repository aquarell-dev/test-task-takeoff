import { FC } from 'react';

const Index: FC = () => {
  return (
    <div className='h-[800px] w-screen relative'>
      <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-[700px]'>
        <p className='text-xl'>
          Для выполнения был выбран сервис <a href='https://mockapi.io/'
                                              className='text-3xl text-indigo-600'>https://mockapi.io/</a>, ибо зачем
          что-то устанавливать, если можно в пару кликов настроить АПИ.
        </p>
        <p className='text-xl my-4'>
          Стек: <span className='text-3xl text-indigo-600'>React, Redux-Toolkit, RTK Query, Tailwind</span>
        </p>
        <p className='text-xl my-4'>
          Авторизация происходит следущем путем, если в списке юзеров есть юзер с указанным логином и паролем, то мы
          авторизируемся, если нет - показываем ошибку.
        </p>
        <p className='text-xl'>То есть, по сути, имитируем метод <span className='text-indigo-600 font-medium'>/auth/</span> на бэке.</p>
      </div>

    </div>
  );
};

export default Index;