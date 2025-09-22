import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <section className="bg-gradient-brand text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Medical Coding Journey?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Join thousands of successful medical coders who started their journey with us.
          </p>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <div className="flex items-center gap-2">
                <span className="font-medium">Get In Touch:</span>
                <a href="mailto:info.nexgenhealth@gmail.com" className="hover:text-white/80 transition-colors">
                  info.nexgenhealth@gmail.com
                </a>
              </div>
              <div className="hidden sm:block w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">or</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Call Us Via:</span>
                <a href="tel:+919360218322" className="hover:text-white/80 transition-colors">
                  +91 9360218322
                </a>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enrollment">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started Today →
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;