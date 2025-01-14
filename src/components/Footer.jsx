import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Nos Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white text-sm font-medium"
              >
                Contactez-nous
              </Link>
            </li>
          </ul>
        </nav>

        <h2 className="text-xl font-semibold mb-4">
          Suivez-nous sur les réseaux sociaux
        </h2>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61571856745437"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.916c-1.504 0-1.795.714-1.795 1.763v2.314h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://x.com/PafEtClick789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.725 9.843 9.843 0 01-3.127 1.194 4.916 4.916 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.917 4.917 0 001.523 6.557 4.897 4.897 0 01-2.229-.616v.061a4.919 4.919 0 003.946 4.827 4.9 4.9 0 01-2.224.085 4.923 4.923 0 004.604 3.419A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.637A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608C4.516 3.163 5.783 2.892 7.15 2.83 8.416 2.772 8.796 2.76 12 2.76zM12 0C8.741 0 8.332.013 7.052.072 5.771.13 4.657.426 3.734 1.348 2.812 2.27 2.516 3.384 2.458 4.666 2.4 5.946 2.387 6.354 2.387 12s.013 6.054.071 7.334c.058 1.281.355 2.395 1.277 3.318.923.922 2.037 1.219 3.318 1.277 1.28.058 1.689.071 7.334.071s6.054-.013 7.334-.071c1.281-.058 2.395-.355 3.318-1.277.922-.923 1.219-2.037 1.277-3.318.058-1.28.071-1.689.071-7.334s-.013-6.054-.071-7.334c-.058-1.281-.355-2.395-1.277-3.318-.923-.922-2.037-1.219-3.318-1.277C18.054.013 17.645 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.882 1.44 1.44 0 100-2.882z" />
            </svg>
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Click-et-Paf. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
