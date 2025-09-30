import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import Error from "../components/Error/Error";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

const repoName = import.meta.env.VITE_REPO_NAME ?? "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      // errorElement: <h1>Oops, something went wrong</h1>,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: `/` }
);
