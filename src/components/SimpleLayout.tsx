import { ReactNode } from "react";
import Footer from "./Footer";

interface SimpleLayoutProps {
  children: ReactNode;
}

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content without header */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SimpleLayout;