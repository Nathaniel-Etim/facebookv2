import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavSideBar from "./component/layout/navSideBar";
import Feed from "./component/feed/feed";
import MessageComponent from "./pages/messagePage/message";
import UserProfileTop from "./component/userProfile/UserProfile";
import EveryMessenger from "./component/messenger/messages";
import ChatSection from "./component/messenger/chatSection";
import ReelsPage from "./pages/reelsPage/reelsContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavSideBar />}>
      <Route index element={<Feed />} />
      <Route path="messenger" element={<MessageComponent />}>
        <Route index element={<EveryMessenger />} />
        <Route path="messages" element={<ChatSection />} />
      </Route>
      <Route path="userProfile" element={<UserProfileTop />} />
      <Route path="reels" element={<ReelsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
