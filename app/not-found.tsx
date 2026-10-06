import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>Page not found</h1>
        <p>Sorry, we couldn&rsquo;t find that page.</p>
        <p>
          <Link href="/">Back to the home page</Link>
        </p>
      </div>
    </section>
  );
}
