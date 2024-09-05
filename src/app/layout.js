import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserProvider from "@/context/userProvider";
import MobileNavbar from "@/components/Mobile/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task-Manager",
  description: "Manage the tasks of user",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <Navbar/>
        <MobileNavbar/>
        {children}
        <Footer/>
        </UserProvider>
        </body>
    </html>
  );
}
