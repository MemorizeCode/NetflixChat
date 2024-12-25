import { fetchIsAuth } from "@/entities/User";
import MainLayout from "@/shared/ui/Layout/ui/MainLayout";
import { NavBar } from "@/widget/NavBar";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "./providers/router";
import { PageLoader } from "@/widget/PageLoader";

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
