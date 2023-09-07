import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutDefault from "./layouts/LayoutDefault";
import { authRoutes, publicRoutes } from "./routes/routes";

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutAuth />}>
          {authRoutes.map((route) => {
            const Page = route.component;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Route>
        <Route element={<LayoutDefault />}>
          {publicRoutes.map((route) => {
            const Page = route.component;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
