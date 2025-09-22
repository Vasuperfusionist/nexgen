import { ReactNode } from "react";
import Footer from "./Footer";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
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

export default AboutLayout;