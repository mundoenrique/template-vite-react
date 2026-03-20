export function SocialPage() {
  return (
    <>
      <svg className="mb-2 h-8 w-8 text-purple-500" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2 className="mb-1 text-xl font-semibold">Connect with us</h2>
      <p className="mb-3 text-gray-600">Join the Vite community</p>
      <ul className="space-y-2">
        <li>
          <a href="https://github.com/vitejs/vite" target="_blank" className="flex items-center gap-2 hover:underline">
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
    </>
  );
}
