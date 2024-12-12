import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold text-center text-white">
        Bookmark Manager
      </h1>
      <div className="flex flex-col gap-8 items-center justify-center">
        <p className="text-xl text-center text-white">
          A simple bookmark manager built with Next.js and Tailwind CSS.
        </p>
        <a
          href="/bookmarks"
          className="rounded-full bg-white px-8 py-4 text-xl font-bold text-black hover:bg-gray-100"
        >
          View Bookmarks
        </a>
      </div>
    </div>
  );
}
