import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow p-4 flex justify-between fixed w-full top-0 bg-white z-10">
      <Link
        href="/"
        aria-label="Daloy - Home"
        className="flex items-center justify-center"
      >
        <h1 className="text-4xl font-yesteryear text-purple-600">Daloy</h1>
      </Link>
      <div>
        <Button aria-label="Sign in button">Sign In</Button>
      </div>
    </header>
  );
}
