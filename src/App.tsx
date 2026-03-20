import { useState } from 'react';

import { Button } from '#/components/ui/button';

import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center" className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
        <div className="mb-4 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <img src={heroImg} className="h-44.75 w-42.5 drop-shadow-lg" width="170" height="179" alt="" />
            <img src={reactLogo} className="animate-spin-slow absolute top-2 left-2 h-12 w-12" alt="React logo" />
            <img src={viteLogo} className="absolute right-2 bottom-2 h-10 w-10" alt="Vite logo" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold">Get started</h1>
          <p className="text-gray-500">
            Edit <code className="rounded bg-gray-100 px-1">src/App.tsx</code> and save to test{' '}
            <code className="rounded bg-gray-100 px-1">HMR</code>
          </p>
        </div>
        <Button
          className="mt-4 rounded bg-blue-600 px-6 py-2 font-semibold text-white shadow transition hover:bg-blue-700"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Count is {count}
        </Button>
      </section>

      <div className="my-8 h-2 w-full rounded-full bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-60"></div>

      <section id="next-steps" className="mx-auto my-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <div id="docs" className="flex flex-col items-start rounded-lg bg-white/80 p-6 shadow">
          <svg className="mb-2 h-8 w-8 text-blue-500" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-1 text-xl font-semibold">Documentation</h2>
          <p className="mb-3 text-gray-600">Your questions, answered</p>
          <ul className="space-y-2">
            <li>
              <a href="https://vite.dev/" target="_blank" className="flex items-center gap-2 hover:underline">
                <img className="h-6 w-6" src={viteLogo} alt="Vite logo" /> Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" className="flex items-center gap-2 hover:underline">
                <img className="h-6 w-6" src={reactLogo} alt="React logo" /> Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex flex-col items-start rounded-lg bg-white/80 p-6 shadow">
          <svg className="mb-2 h-8 w-8 text-purple-500" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-1 text-xl font-semibold">Connect with us</h2>
          <p className="mb-3 text-gray-600">Join the Vite community</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <svg className="h-5 w-5 text-gray-800" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" className="flex items-center gap-2 hover:underline">
                <svg className="h-5 w-5 text-indigo-600" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" className="flex items-center gap-2 hover:underline">
                <svg className="h-5 w-5 text-black" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <svg className="h-5 w-5 text-sky-400" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="my-8 h-2 w-full rounded-full bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 opacity-60"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
