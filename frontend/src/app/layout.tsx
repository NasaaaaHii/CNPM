import "../styles/globals.css";

import { Toaster } from 'sonner';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mdl-js">

      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}