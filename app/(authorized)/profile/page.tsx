export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded shadow overflow-hidden">
          <div className="h-32 bg-gray-300"></div>
          <div className="p-4">
            <div className="w-20 h-20 rounded-full bg-gray-400 -mt-12 border-4 border-white"></div>
            <h2 className="text-xl font-semibold mt-2">John Doe</h2>
            <p className="text-sm text-gray-600">Web Developer at Company</p>
            <p className="mt-2 text-sm">Passionate about building products and solving real world problems with code.</p>
          </div>
        </div>
      </main>
    </div>
  );
}