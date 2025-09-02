import Footer from "../home/footer";
import Header from "../home/header";


import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  )}