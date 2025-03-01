'use client';
// import { useGetMe } from '@/hooks/use-get-me';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  // const { data, isFetching } = useGetMe();
  return (
    <div className={`flex flex-col ${className}`}>
      {/* {isFetching ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          {data?.id} {data?.name}
        </div>
      )} */}
      <hr className="my-4" />
      <Link href="/new">Новые</Link>
      <Link href="/likes">Лайкнутые</Link>
      <Link href="/im">Сообщения</Link>
    </div>
  );
};
