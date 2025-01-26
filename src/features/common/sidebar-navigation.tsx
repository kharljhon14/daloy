'use client';

import Link from 'next/link';
import { FaBuilding, FaFolder } from 'react-icons/fa';
import { FaMessage, FaPeopleGroup } from 'react-icons/fa6';

interface Props {
  active: boolean;
}

export default function SidebarNavigation({ active: isActive }: Props) {
  return (
    <div
      className={`flex top-[4.5rem] ${
        isActive ? 'left-0 opacity-100' : '-left-[160vw] opacity-0'
      }  lg:left-0 bg-white fixed lg:opacity-100 lg:max-w-xs w-full h-screen z-30 transition-all duration-500 ease`}
    >
      <aside className="w-full p-5">
        <nav className="flex flex-col gap-y-4 w-full">
          <div className="border-b p-1">
            <Link
              href="/"
              className="w-full flex items-center gap-3 p-3 pl-8 bg-purple-200 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              <FaFolder className="text-purple-400" /> <span>All Task</span>
            </Link>
          </div>
          <div className="border-b p-1">
            <Link
              href="/"
              className="w-full flex items-center gap-3 p-3 pl-8 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              <FaPeopleGroup className="text-purple-400" /> <span>Team</span>
            </Link>
          </div>
          <div className="border-b p-1">
            <Link
              href="/"
              className="w-full flex items-center p-3 pl-8 gap-3 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              <FaBuilding className="text-purple-400" /> <span>Company</span>
            </Link>
          </div>
          <div className="border-b p-1">
            <Link
              href="/"
              className="w-full flex items-center gap-3 p-3 pl-8 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              <FaMessage className="text-purple-400" /> <span>Messages</span>
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}
