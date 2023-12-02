import React from "react";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href="#_"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            />
            <span className="ml-3 text-xl">Zen</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Real time Sentiment Analysis using Deep Learning Techniques in
            Natural language Processing.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONTRIBUTE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://github.com/nishant-ai/Zen-MVP-Frontend"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Client
                </a>
              </li>
              <l1>
                <a
                  href="https://github.com/nishant-ai/Zen-MVP-Backend"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Server
                </a>
              </l1>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CONNECT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://www.linkedin.com/in/nishantsh20/"
                  className="text-gray-600 hover:text-gray-800"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nishant-ai"
                  className="text-gray-600 hover:text-gray-800"
                >
                  GitHub
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              EXPLORE PROJECTS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://github.com/nishant-ai?tab=repositories"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Projects
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 ZenChat — Powered with Sentiment Analysis
            <a
              href="https://github.com/nishant-ai"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @nishant-ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
