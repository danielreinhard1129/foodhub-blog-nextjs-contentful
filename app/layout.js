import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FoodHub Blog | Explore Culinary Delights & Foodie Adventures",
  description:
    "Description: Indulge in a flavorful journey with FoodHub Blog! Discover delectable recipes, culinary inspirations, and captivating food stories that satisfy your cravings and elevate your gastronomic experience. Dive into a world of tastes, tips, and trends that celebrate the art of food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
