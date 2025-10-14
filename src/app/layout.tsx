import { Header } from "@/components/layout/header/header";
import "./styles/App.scss";
import Footer from "@/components/layout/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
