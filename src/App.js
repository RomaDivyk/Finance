import {
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Home from "./components/routes/Home.js";
import Dashboard from "./components/routes/Dashboard.js";
import Expenses from "./components/routes/Expenses.js";
import Groups from "./components/routes/Groups.js";
import Plan from "./components/routes/Plan.js";
import UserList from "./components/routes/UserList.js";
import AddDefaultCategory from "./components/routes/AddDefaultCategory.js";
import LeaveFeedback from "./components/routes/LeaveFeedback.js";
import Profile from "./components/routes/Profile.js";
import Exit from "./components/routes/Exit.js";
import LogInPage from "./components/routes/LogIn.js";
import NotFound from "./components/routes/NotFound.js";
import RegistrationPage from "./components/routes/Registration.js";

/* const AppLayout = () => {
  <>
    <Sidebar />
    <Outlet />
  </>;
}; */

/* export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/costs",
        element: <Costs />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/userlist",
        element: <UserList />,
      },
      {
        path: "/adddefaulcategory",
        element: <AddDefaultCategory />,
      },
      {
        path: "/leavefeedback",
        element: <LeaveFeedback />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/exit",
        element: <Exit />,
      },
    ],
  },
]); */

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <main>
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LogInPage />}></Route>
            <Route path="/registration" element={<RegistrationPage />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/expenses" element={<Expenses />}></Route>
            <Route path="/groups" element={<Groups />}></Route>
            <Route path="/plan" element={<Plan />}></Route>
            <Route path="/userlist" element={<UserList />}></Route>
            <Route
              path="/adddefaulcategory"
              element={<AddDefaultCategory />}
            ></Route>
            <Route path="/leavefeedback" element={<LeaveFeedback />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/exit" element={<Exit />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        {/*    <Footer /> */}
      </div>
    </>
  );
}

export default App;
