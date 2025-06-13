export default function Network() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Manage Your Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white p-4 rounded shadow flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium">Person {id}</p>
                <button className="mt-1 text-sm text-blue-700">Connect</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}