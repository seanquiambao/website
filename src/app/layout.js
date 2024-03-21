import "./globals.css";
import Navigation from "@/components/Navigation";
export const metadata = {
  title: "Sean Leandro Quiambao",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
