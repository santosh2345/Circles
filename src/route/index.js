import React from "react";
import DashboardLayout from "../layouts/dashboard";
import Home from "../components/home/home";
import { Navigate, useRoutes } from "react-router-dom";
import ElectionSubmissionReport from "../components/election/election-submission-report/electionSubmissionReport";
import ElectionResults from "../components/election/electionResults/electionResults";
import LiveStudios from "../components/liveStudios/liveStudios";
import Notification from "../components/notification/notification";
import Settings from "../components/settings/settings";
import Governership from "../components/election/election-submission-report/governership/governership";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "election-submission-report",
          element: <ElectionSubmissionReport />,
        },
        {path: "election-submission-report/governership", element:<Governership />},
        { path: "election-results", element: <ElectionResults /> },
        { path: "live-studios", element: <LiveStudios /> },
        { path: "notification", element: <Notification /> },
        {path: "settings", element: <Settings />},
        

      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

//   { path: "settings", element: <Settings /> },
//   { path: "group", element: <GroupPage /> },
//   { path: "call", element: <CallPage /> },
//   { path: "profile", element: <ProfilePage /> },
//   { path: "404", element: <Page404 /> },
//   { path: "*", element: <Navigate to="/404" replace /> },

//   {
//     path: "/auth",
//     element: <MainLayout />,
//     children: [
//       { element: <LoginPage />, path: "login" },
//       { element: <RegisterPage />, path: "register" },
//       { element: <ResetPasswordPage />, path: "reset-password" },
//       { element: <NewPasswordPage />, path: "new-password" },
//       { element: <VerifyPage />, path: "verify" },

//     ],
//   },
