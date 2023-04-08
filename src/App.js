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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavSideBar />}>
      <Route index element={<Feed />} />
      <Route path="messenger" element={<MessageComponent />} />
      <Route path="userProfile" element={<UserProfileTop />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
