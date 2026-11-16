import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Accessibility test page</h1>
      <p>This page has a few accessibility issues on purpose.</p>
      <Link href="/about">
        <img src="/globe.svg" width="24" height="24" alt="" /> About us
      </Link>
      <form>
        <label>Email</label>
        <input id="email" type="email" name="email" />
      </form>
    </div>
  );
}
