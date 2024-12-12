 function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen">
      <h1 className="text-5xl font-bold text-center">
        Bookmark Manager
      </h1>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-center">
        It is the most productive way to work with bookmarks.
        Build Websktops with others. Collaborate, organize, customize.
        </p>
        <a
          href="/homepage"
          className="rounded-full bg-blue-600 px-4 py-3 mt-4 text-xl font-bold text-black hover:bg-red-300">
          Log in
        </a>
      </div>
    </div>
  );
}
export default Home