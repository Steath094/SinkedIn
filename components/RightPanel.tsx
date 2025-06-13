export default function RightPanel() {
  return (
    <aside className="w-64 p-4 bg-white rounded shadow space-y-4">
      <div>
        <h3 className="text-sm font-semibold">Add to your feed</h3>
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <p className="text-sm">Follow ReactJS</p>
        </div>
      </div>
      <div className="text-sm text-blue-700 cursor-pointer">View all recommendations</div>
    </aside>
  );
}
