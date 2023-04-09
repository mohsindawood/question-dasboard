import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';
// layout
import MainLayout from "../src/layouts/dashboard";
import AuthLayout from "../src/layouts/auth";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isDemo = pathname === "/auth/login";
  return (
    <>
      {isDemo ? <AuthLayout>
        <Toaster />
        <Component {...pageProps} />
      </AuthLayout> :
        <MainLayout>
          <Toaster />
          <Component {...pageProps} />
        </MainLayout>}

    </>

  );
}