export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4 max-w-3xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold">Recommended Jobs</h2>
        {[1, 2].map((id) => (
          <div key={id} className="bg-white p-4 rounded shadow space-y-1">
            <p className="font-medium">Frontend Developer</p>
            <p className="text-sm text-gray-500">Company {id} • Location</p>
            <button className="mt-2 text-sm text-blue-700">Apply</button>
          </div>
        ))}
      </main>
    </div>
  );
}