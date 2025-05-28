import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="mt-20 border-t pt-6 pb-8 text-center text-sm text-muted-foreground">
      <p>
        Designed &amp; developed with love by{' '}
        <span className="font-semibold">Cumstein</span>
      </p>
      <div className="mt-2 flex justify-center gap-4 text-xl">
        <a
          href="https://github.com/cumstein"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kamyab-hosseinzadeh/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-2 text-xs">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
