'use client';
// import { useInfinityScrollUsers } from '@/hooks';
import React from 'react';
// import { AddUser } from './add-user';

interface Props {
  className?: string;
}

export const UserList: React.FC<Props> = ({ className }) => {
  // const {
  //   data: users,
  //   isPending,
  //   isFetching,
  //   cursor,
  //   isFetchingNextPage,
  // } = useInfinityScrollUsers();
  // if (isPending) {
  //   return <div>Loading...</div>;
  // }

  // // FIXME: Removing isFetching while a cursor is present will prevent cache updates after user creation
  // if (isFetching) return <div>Fetching...</div>;

  console.log('Правый сайдбар');
  return (
    <div className={`flex flex-col gap-y-3 ${className}`}>
      Правый сайдбар
      <button>Заглушка кнопка</button>
      {/* <AddUser /> */}
      {/* {users?.map((f) => (
        <div key={f.id} className="flex flex-col gap-x-3 bg-green-500 w-fit">
          <p>{f.name}</p>
        </div>
      ))}
      {cursor}
      {isFetchingNextPage && <div>Loading...</div>} */}
    </div>
  );
};
