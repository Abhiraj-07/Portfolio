import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhiraj Trivedi",
  description: "Explore the portfolio of Abhiraj Trivedi, a skilled web developer specializing in creating responsive, user-friendly websites and web applications. View projects, skills, and contact information. Let's build something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
