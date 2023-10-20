import "./Footer.css";
export function Footer() {
  const coder = "Nivrii";
  return (
    <footer>
      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Nivrii/intro-component-with-signup">
          {coder}
        </a>
        .
      </p>
    </footer>
  );
}
