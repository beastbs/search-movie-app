import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const setActiveLink = (path: string) => {
    return router.pathname === path ? "active" : "";
  };

  return (
    <ul className="nav nav-tabs fs-2">
      <li className="nav-item">
        <Link href="/" legacyBehavior>
          <a className={`nav-link ${setActiveLink("/")}`} aria-current="page">
            Home
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/movies" legacyBehavior>
          <a className={`nav-link ${setActiveLink("/movies")}`}>Movies</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/saved" legacyBehavior>
          <a className={`nav-link ${setActiveLink("/saved")}`}>Saved</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login" legacyBehavior>
          <a className={`nav-link ${setActiveLink("/login")}`}>Login</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
