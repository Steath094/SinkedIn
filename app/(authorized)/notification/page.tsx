export default function Notifications() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-4 max-w-2xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white p-4 rounded shadow flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <p className="text-sm">You have a new message from User {id}.</p>
          </div>
        ))}
      </main>
    </div>
  );
}