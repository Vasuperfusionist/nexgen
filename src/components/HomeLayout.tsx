import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Main content with proper spacing for fixed header */}
      <main className="pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;