export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mdl-js">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
