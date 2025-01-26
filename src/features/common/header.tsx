import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';

interface Props {
  setActive: (v: boolean) => void;
  active: boolean;
}

export default function Header({ setActive, active }: Props) {
  return (
    <header className="py-4 px-6 lg:px-20 flex justify-between fixed w-full top-0 bg-white z-10">
      <div className="flex items-center gap-4 justify-center">
        <button
          onClick={() => setActive(!active)}
          className="block lg:hidden"
        >
          <MdOutlineMenu className="text-4xl" />
        </button>
        <Link
          href="/"
          aria-label="Daloy - Home"
          className="flex items-center justify-center"
        >
          <h1 className="text-4xl font-yesteryear text-purple-600">Daloy</h1>
        </Link>
      </div>
      <div>
        <Button aria-label="Sign in button">Sign In</Button>
      </div>
    </header>
  );
}
