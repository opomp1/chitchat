import { useChatStore } from "../store/useChatStore";

import ChatContainer from "../components/chat/ChatContainer";
import NoChatSelected from "../components/chat/NoChatSelected";
import Sidebar from "../components/nav/Sidebar";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-[100svh] bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100svh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
