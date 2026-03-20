import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export function DocsPage() {
  return (
    <>
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
    </>
  );
}
