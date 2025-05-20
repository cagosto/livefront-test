import Headline from '@/components/Headline';
import Link from 'next/link';

interface GenericLayout {
  title: string;
  message: string;
}

export default function GenericLayout({ message, title }: GenericLayout) {
  return (
    <div className="p-9">
      <div className="max-w-2xl mx-auto border-2 border-accent rounded-2xl p-7">
        <Headline variant="h2" type="h2">
          {title}
        </Headline>
        <hr className="border-accent my-3" />
        <p className="text-red-600">{message}</p>
        <div className="flex flex-row justify-end">
          <Link
            href="/"
            className="rounded-lg bg-secondary p-3.5 shadow hover:bg-accent transition"
          >
            Back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
}
