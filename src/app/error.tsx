'use client';
import GenericLayout from '@/components/Layouts/Generic';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <GenericLayout message={error.message} title="Something went wrong!" />
  );
}

