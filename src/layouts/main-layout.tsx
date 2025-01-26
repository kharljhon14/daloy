import Header from '@/features/common/header';
import SidebarNavigation from '@/features/common/sidebar-navigation';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="">
        <div className="hidden lg:flex col-start-1 col-end-3 top-24 left-4 bg-white fixed max-w-sm w-full h-screen shadow-md rounded-md">
          <SidebarNavigation />
        </div>
        <main className="mx-0 lg:mx-96 px-6 lg:px-12 mt-24">{children}</main>
      </div>
    </>
  );
}
