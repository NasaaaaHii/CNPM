import "../styles/globals.css";
import { Toaster } from 'sonner';
import { Navbar } from ".././components/layout/Navbar";
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mdl-js">

      <body>
       <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}