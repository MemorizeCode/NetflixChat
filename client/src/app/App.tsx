import { fetchIsAuth } from "@/entities/User";
import MainLayout from "@/shared/ui/Layout/ui/MainLayout";
import { PageLoader } from "@/shared/ui/PageLoader";
import { NavBar } from "@/widget/NavBar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./providers/router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsAuth());
  }, []);

  return (
    <>
      <Suspense fallback={<PageLoader/>}>
        <MainLayout header={<NavBar />} content={<AppRouter />} />
      </Suspense>
    </>
  );
}

export default App;
