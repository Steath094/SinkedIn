export default function AddPost() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4 max-w-xl mx-auto">
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
            <p className="text-sm font-medium">John Doe</p>
          </div>
          <textarea
            className="w-full p-2 border rounded text-sm mb-4"
            placeholder="What's on your mind?"
            rows={5}
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-blue-700 text-white px-4 py-2 rounded">Post</button>
          </div>
        </div>
      </main>
    </div>
  );
}