import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import { Badge } from '@shadcn/components/ui/badge';
import { Button } from '@shadcn/components/ui/button';
import { Card } from '@shadcn/components/ui/card';
import { Separator } from '@shadcn/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcn/components/ui/tabs';

import heroImg from '../assets/hero.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export function MainLayout() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const activePage = pathname === '/social' ? 'social' : 'docs';
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
        <Tabs
          defaultValue="docs"
          value={activePage}
          className="w-full"
          onValueChange={(value) => {
            const page = value === 'social' ? '/social' : '';
            void navigate(page, { replace: true });
          }}
        >
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value={activePage}>
            <Card className="flex flex-col items-start p-6">
              <Outlet />
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-8" />
      <section id="spacer"></section>
    </>
  );
}
