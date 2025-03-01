import { UserList } from '@/components';
import { Sidebar } from '@/components/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chime',
  description: 'Социальная сеть Chime',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" max-w-[1200px] flex relative w-full h-full">
        <div className="flex py-4 flex-col max-w-[300px] w-full sticky top-0 h-screen border-r-1">
          <Sidebar />
          <div className={'my-2 w-full h-[1px] bg-primary-light'} />
        </div>
        <main className="flex-1 w-full max-w-[640px] mx-auto py-4">{children}</main>
        <UserList className="hidden flex-shrink-0 lg:block h-screen max-w-[300px] min-w-[300px] sticky p-4 top-0 rounded-none border-l-1" />
      </div>
    </div>
  );
}
