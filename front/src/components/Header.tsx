import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href="/"><a>🏠home</a></Link>
      <Link href="/login"><a>🔐login</a></Link>
    </>
  );
}