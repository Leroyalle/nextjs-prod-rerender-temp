import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

export const LeftSidebar: React.FC<Props> = ({ className }) => {
  console.log('Левый сайдбар');
  return (
    <div className={`flex flex-col gap-y-2 ${className}`}>
      <Link href="/new">Новые</Link>
      <Link href="/likes">Лайкнутые</Link>
      <Link href="/im">Сообщения</Link>
    </div>
  );
};
