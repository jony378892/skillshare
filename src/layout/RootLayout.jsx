import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Toaster from "../components/Toaster";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto container">
        <Toaster />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
