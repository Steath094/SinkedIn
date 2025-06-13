export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-white rounded shadow space-y-4">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gray-300" />
        <p className="mt-2 font-semibold">John Doe</p>
        <p className="text-sm text-gray-500">Web Developer</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Connections</p>
        <p className="text-blue-700 text-sm font-medium">Grow your network</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">Saved items</p>
      </div>
    </aside>
  );
}