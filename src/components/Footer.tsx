import { Facebook, Instagram, Linkedin, Youtube, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const courses = [
    "CPC Certification - 60 Days",
    "IPDRG Training - 30 Days",
    "CRC Certification - 45 Days", 
    "CCS Training - 75 Days",
    "Basic Medical Coding - 45 Days",
    "E&M Speciality - 30 Days",
    "ED Speciality - 30 Days",
    "Comprehensive Training - 90 Days"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <footer className="bg-gradient-brand text-white py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Educated! Feel Empowered!
          </h2>
          <p className="text-white/90 text-lg">
            Your journey to becoming a certified medical coder starts here
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="mb-6 flex items-center gap-2">
              <img 
                src="/nexgen-logo-transparent.png" 
                alt="NeXgen Healthcare Logo" 
                className="h-12 object-contain"
              />
              <div className="flex flex-col justify-center -space-y-0.5">
                <span className="text-white font-bold text-xl leading-tight tracking-wide">
                  Ne<span className="text-yellow-300">X</span>gen
                </span>
                <span className="text-white/90 font-semibold text-sm leading-tight" style={{ marginLeft: '1.15rem' }}>
                  Healthcare
                </span>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              NeXgen Healthcare is a trusted name in medical coding training, helping students become certified professionals with career-ready skills.
            </p>
            <p className="text-white font-semibold italic">
              "Training Coders. Transforming Careers."
            </p>
          </div>

          {/* Courses Offered */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Courses Offered</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white/90 text-sm leading-relaxed">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-1">Call/WhatsApp:</p>
                <p className="text-white/90 text-sm">
                  <a href="tel:+919360218322" className="hover:text-white transition-colors">+91 9360218322</a>,{" "}
                  <a href="tel:+918525849171" className="hover:text-white transition-colors">+91 8525849171</a>
                </p>
              </div>
              
              <div>
                <p className="text-white font-medium mb-1">Email:</p>
                <p className="text-white/90 text-sm">
                  <a href="mailto:info.nexgenhealth@gmail.com" className="hover:text-white transition-colors">
                    info.nexgenhealth@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-white font-medium mb-3">Follow Us:</p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/profile.php?id=61578518076153" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-6 w-6 text-white/80 hover:text-white transition-colors" />
                  </a>
                  <a href="https://www.instagram.com/nexgen.healthcare?igsh=ZHFhNmE3YWNjNzNv" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 text-white/80 hover:text-white transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/company/nexgenhealthcoding/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-white/80 hover:text-white transition-colors" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCNJJ-j7gVqu13-MeALnmjuA" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-6 w-6 text-white/80 hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/70 text-sm">
            © 2025 NeXgen Healthcare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
