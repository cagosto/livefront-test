import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-secondary mb-6">
      <div className="2xl:max-w-screen-2xl mx-auto p-9">
        <h1 className="font-logo text-center text-5xl text-transparent bg-gradient-to-r from-amber-200 to-rose-950 bg-clip-text  bg-size-200 animate-gradient">
          <Link href="/" className="focus:text-accent outline-0">
            Harry Potter World
          </Link>
        </h1>
      </div>
    </header>
  );
}

