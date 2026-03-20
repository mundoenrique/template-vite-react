import { useState } from 'react';

import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Card } from '#/components/ui/card';
import { Separator } from '#/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '#/components/ui/tabs';

import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center" className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
        <Card className="flex w-full max-w-md flex-col items-center gap-4 p-8 shadow-lg">
          <div className="relative mb-2 flex items-center justify-center">
            <img src={heroImg} className="h-44.75 w-42.5 drop-shadow-lg" width="170" height="179" alt="" />
            <img src={reactLogo} className="animate-spin-slow absolute top-2 left-2 h-12 w-12" alt="React logo" />
            <img src={viteLogo} className="absolute right-2 bottom-2 h-10 w-10" alt="Vite logo" />
          </div>
          <Badge className="mb-2" variant="secondary">
            Vite + React + chadcn/ui
          </Badge>
          <h1 className="mb-2 text-center text-3xl font-bold">Get started</h1>
          <p className="text-center text-gray-500">
            Edit <code className="rounded bg-gray-100 px-1">src/App.tsx</code> and save to test{' '}
            <code className="rounded bg-gray-100 px-1">HMR.</code>
          </p>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setCount((count) => count + 1);
            }}
          >
            Count is {count}
          </Button>
        </Card>
      </section>

      <Separator className="my-8" />

      <section id="next-steps" className="mx-auto my-12 w-full max-w-4xl">
        <Tabs defaultValue="docs" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          <TabsContent value="docs">
            <Card className="flex flex-col items-start p-6">
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
            </Card>
          </TabsContent>
          <TabsContent value="social">
            <Card className="flex flex-col items-start p-6">
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
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-8" />
      <section id="spacer"></section>
    </>
  );
}

export default App;
