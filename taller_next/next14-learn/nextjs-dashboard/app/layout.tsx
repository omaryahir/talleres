import './ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1>Este título</h1>
        <div style={{border: 'solid 5px red'}}>
        {children}
        </div>
      </body>
    </html>
  );
}
