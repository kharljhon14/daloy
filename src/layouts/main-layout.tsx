import Header from '@/features/common/header';
import Nagivations from '@/features/common/nagivations';
import SidebarNavigation from '@/features/common/sidebar-navigation';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      N<Nagivations />
      <div>
        <main className="ml-0 lg:ml-96 px-6 lg:px-12 mt-24">{children}</main>
      </div>
    </>
  );
}
