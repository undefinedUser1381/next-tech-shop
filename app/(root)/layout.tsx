import Footer from "../src/components/shared/layout/Footer/Footer";
import Header from "../src/components/shared/layout/Header/Header";
import MobileBottomBar from "../src/components/shared/layout/MobileBottomBar/MobileBottomBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />

      {children}
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
