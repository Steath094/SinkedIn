export default function Feed() {
  return (
    <section className="flex-1 p-4 space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <input
          type="text"
          placeholder="Start a post"
          className="w-full p-2 border rounded text-sm"
        />
      </div>
      {[1, 2, 3].map((post) => (
        <div key={post} className="bg-white p-4 rounded shadow">
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-medium">Jane Doe</p>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
          <p className="mt-2 text-sm">This is a sample post content...</p>
        </div>
      ))}
    </section>
  );
}