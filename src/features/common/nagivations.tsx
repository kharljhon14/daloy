'use client';

import { useState } from 'react';
import Header from './header';
import SidebarNavigation from './sidebar-navigation';

export default function Nagivations() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Header
        active={active}
        setActive={setActive}
      />
      <SidebarNavigation active={active} />
    </>
  );
}
