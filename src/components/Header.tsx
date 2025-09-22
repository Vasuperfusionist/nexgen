import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import RequestCallBackModal from "@/components/RequestCallBackModal";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const courses = [
  { name: "Basic Medical Coding Training (BMCT)", path: "/courses/bmct" },
  { name: "CPC Certification Training", path: "/courses/cpc" },
  { name: "Comprehensive Medical Coding Training (CMCT)", path: "/courses/cmct" },
  { name: "IPDRG Speciality Training", path: "/courses/ipdrg" },
  { name: "E&M Speciality Training", path: "/courses/em" },
  { name: "ED Speciality Training", path: "/courses/ed" },
  { name: "Certified Risk Adjustment Coder (CRC)", path: "/courses/crc" },
  { name: "Certified Coding Specialist (CCS)", path: "/courses/ccs" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;


  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-2xl"
      style={{ 
        background: 'linear-gradient(135deg, #007B8A 0%, #4169E1 50%, #191970 100%)',
        backdropFilter: 'blur(20px)'
      }}
    >
      {/* Single Modern Navigation */}
      <nav className="py-6 px-4"
        style={{ 
          background: 'rgba(0, 123, 138, 0.1)',
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="container mx-auto">
          {/* Contact Bar - Mobile Optimized */}
          <div className="flex justify-between items-center text-white/70 text-xs py-3 border-b border-white/10">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-1 md:space-x-2">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline text-xs md:text-sm">
                  <a href="tel:+919360218322" className="hover:text-white transition-colors">+91 9360218322</a> / <a href="tel:+918525849171" className="hover:text-white transition-colors">8525849171</a>
                </span>
                <span className="sm:hidden text-xs">
                  <a href="tel:+919360218322" className="hover:text-white transition-colors">+91 9360218322</a>
                </span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">
                  <a href="mailto:info.nexgenhealth@gmail.com" className="hover:text-white transition-colors">info.nexgenhealth@gmail.com</a>
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61578518076153" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-white/10 rounded">
                <Facebook className="h-3 w-3 md:h-4 md:w-4 hover:text-white/90 transition-colors" />
              </a>
              <a href="https://www.instagram.com/nexgen.healthcare?igsh=ZHFhNmE3YWNjNzNv" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-white/10 rounded">
                <Instagram className="h-3 w-3 md:h-4 md:w-4 hover:text-white/90 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/nexgenhealthcoding/" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-white/10 rounded">
                <Linkedin className="h-3 w-3 md:h-4 md:w-4 hover:text-white/90 transition-colors" />
              </a>
              <a href="https://www.youtube.com/channel/UCNJJ-j7gVqu13-MeALnmjuA" target="_blank" rel="noopener noreferrer" className="p-1 hover:bg-white/10 rounded">
                <Youtube className="h-3 w-3 md:h-4 md:w-4 hover:text-white/90 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Main Navigation */}
          <div className="flex justify-between items-center py-4">
          {/* Logo - Mobile Optimized */}
          <Link to="/" className="flex items-center group ml-4">
            <img 
              src="/nexgen-logo.png" 
              alt="NeXgen Healthcare Logo" 
              className="h-12 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110 filter drop-shadow-2xl hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 text-sm xl:text-base">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-white ${
                isActivePath("/") ? "text-white" : "text-white/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-white ${
                isActivePath("/about") ? "text-white" : "text-white/80"
              }`}
            >
              About Us
            </Link>
            
            {/* Courses Link */}
            <Link
              to="/courses"
              className={`font-medium transition-colors hover:text-white ${
                isActivePath("/courses") ? "text-white" : "text-white/80"
              }`}
            >
              Courses
            </Link>

            {/* Admission Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-white/80 hover:text-white transition-colors">
                <span>Admission</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-md border border-white/20">
                <DropdownMenuItem asChild>
                  <Link
                    to="/enrollment"
                    className="w-full px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/refer-friend"
                    className="w-full px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    Refer a Friend
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/career"
              className={`font-medium transition-colors hover:text-white ${
                isActivePath("/career") ? "text-white" : "text-white/80"
              }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-white ${
                isActivePath("/contact") ? "text-white" : "text-white/80"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <RequestCallBackModal>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-md">
                Request Call Back ➜
              </Button>
            </RequestCallBackModal>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <div className="lg:hidden">
            <button
              className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 text-white active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu - Better UX */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-white/20 pt-4 rounded-2xl mx-4 mb-4 shadow-2xl border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 123, 138, 0.95) 0%, rgba(65, 105, 225, 0.95) 50%, rgba(25, 25, 112, 0.95) 100%)',
              backdropFilter: 'blur(20px)'
            }}>
            <div className="flex flex-col space-y-2 p-4">
              <Link 
                to="/" 
                className="font-medium text-white hover:text-white/80 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 active:scale-95 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-white hover:text-white/80 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 active:scale-95 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/courses" 
                className="font-medium text-white hover:text-white/80 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 active:scale-95 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-white py-3 px-4 text-lg">Admission</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/enrollment"
                    className="block text-white/80 hover:text-white transition-all duration-300 py-3 px-3 rounded-lg hover:bg-white/10 active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/refer-friend"
                    className="block text-white/80 hover:text-white transition-all duration-300 py-3 px-3 rounded-lg hover:bg-white/10 active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Refer a Friend
                  </Link>
                </div>
              </div>
              <Link 
                to="/career" 
                className="font-medium text-white hover:text-white/80 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 active:scale-95 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-white hover:text-white/80 transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 active:scale-95 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <RequestCallBackModal>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 w-full rounded-xl py-5 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-md mt-4">
                  Request Call Back ➜
                </Button>
              </RequestCallBackModal>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;