import AppBar from "@/components/AppBar";
import AppSideBar from "@/components/AppSideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <AppSideBar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
