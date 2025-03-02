'use client';
import React, { memo } from 'react';

interface Props {
  className?: string;
}

export const RightSidebar: React.FC<Props> = memo(function RightSidebar({ className }) {
  console.log('Правый сайдбар');
  return (
    <div className={`flex flex-col gap-y-3 ${className}`}>
      Правый сайдбар
      <button>Заглушка кнопка</button>
    </div>
  );
});
