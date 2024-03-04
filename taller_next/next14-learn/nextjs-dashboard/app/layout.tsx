import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Este título</h1>
        <div style={{border: 'solid 5px red'}}>
        {children}
        </div>
      </body>
    </html>
  );
}
