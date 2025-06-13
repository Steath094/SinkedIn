import Feed from "@/components/FeedPosts";
import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex gap-4 p-4">
        <Sidebar />
        <Feed />
        <RightPanel />
      </main>
    </div>
  );
}
