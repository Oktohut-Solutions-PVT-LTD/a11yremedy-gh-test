import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
      <p>A second test page with accessibility issues on purpose.</p>
      <Link href="/">
        <img src="/window.svg" width="24" height="24" alt="" /> Back to home
      </Link>
      <form>
        <label>Your name</label>
        <input id="name" type="text" name="name" />
        <label>Message</label>
        <textarea id="message" name="message" />
      </form>
    </div>
  );
}
