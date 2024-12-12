"use client"
import { useState } from "react";
import { Bookmark } from "@prisma/client"; 

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  // const { data: bookmarks, isLoading, isError } = useBookmarks();
  // const addBookmark = useAddBookmark();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !url) {
      alert("Title and URL are required!");
      return;
    }

    addBookmark.mutate(
      {
        title,
        url,
        description,
        tags: tags.split(",").map((tag) => tag.trim()),
      },
      {
        onSuccess: () => {
          setTitle("");
          setUrl("");
          setDescription("");
          setTags("");
        },
        onError: (error: 'any') => {
          console.error("Error adding bookmark:", error);
        },
      }
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Create New Bookmark</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              title = 'Tilte'
              placeholder="Bookmark Title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
               title = 'URL'
              placeholder="Eg : https://www.example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
               title = 'Description'
              placeholder="Bookmark Description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tags</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
               title = 'Tags'
              placeholder="Eg : tag 1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Bookmark
          </button>
        </form>
      </div>

      Bookmarks List
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {bookmarks?.map((bookmark: Bookmark) => ( */}
          <div
            // key={bookmark.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* <h3 className="text-lg font-bold">{bookmark.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{bookmark.description}</p> */}
            <a
              // href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline text-sm"
            >
              Visit Link
            </a>
            <div className="mt-2">
              {/* {bookmark.tags.map((tag, idx) => ( */}
                <span
                  // key={idx}
                  className="inline-block bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {/* {tag} */}
                </span>
              {/* ))} */}
            </div>
          </div>
        {/* )) */}
        {/* } */}
      </div>
    </div>
  );
};

export default HomePage;