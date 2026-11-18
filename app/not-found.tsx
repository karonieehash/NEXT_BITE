import Link from "next/link";

export default function NotFound() {
  return (
    <main className="detail">
      <h2>Not Found</h2>
      <p>Could not find that recipe.</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}