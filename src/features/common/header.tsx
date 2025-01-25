import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link
        href="/"
        passHref
      >
        <a aria-label="Daloy Home">
          <h1>Daloy</h1>
        </a>
      </Link>
    </header>
  );
}
