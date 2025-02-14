import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <nav>
            <ul className="flex flex-col sm:flex-row justify-center sm:space-x-8 text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/politique-de-confidentialite"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/cgu"
                  className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-2 sm:mb-0"
                >
                  CGU
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <h2 className="text-xl font-semibold text-center mb-6">
          Suivez-nous sur les réseaux sociaux
        </h2>

        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=61571856745437"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-125 mb-4 sm:mb-0"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.916c-1.504 0-1.795.714-1.795 1.763v2.314h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://x.com/PafEtClick789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-125 mb-4 sm:mb-0"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.725 9.843 9.843 0 01-3.127 1.194 4.916 4.916 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.917 4.917 0 001.523 6.557 4.897 4.897 0 01-2.229-.616v.061a4.919 4.919 0 003.946 4.827 4.9 4.9 0 01-2.224.085 4.923 4.923 0 004.604 3.419A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.637A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>

        </div>

        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Click-et-Paf. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
