import React from "react"; // import the React library
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"; // import components, functions and hooks from the react-router-dom library
import NavSideBar from "./component/layout/navSideBar"; // import a custom component
import Feed from "./component/feed/feed"; // import a custom component
import MessageComponent from "./pages/messagePage/message"; // import a custom component
import UserProfileTop from "./component/userProfile/UserProfile"; // import a custom component
import EveryMessenger from "./component/messenger/messages"; // import a custom component
import ChatSection from "./component/messenger/chatSection"; // import a custom component
import ReelsPage from "./pages/reelsPage/reelsContainer"; // import a custom component

const router = createBrowserRouter(
  // create a browser router using the imported function
  createRoutesFromElements(
    // create routes from JSX elements using the imported function
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
  // create a functional component called 'App'
  return <RouterProvider router={router} />; // render the RouterProvider component with the 'router' object as a prop
}

export default App; // export the 'App' component for use in other files
