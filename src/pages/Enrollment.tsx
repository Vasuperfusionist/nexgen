import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Phone, MessageCircle, Youtube, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Enrollment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      
      {/* Hero Section */}
      <section className="py-20 text-white relative">
        <div className="container mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 opacity-90 absolute top-8 left-8">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Enrollment</span>
          </nav>
          
          {/* User Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Enrollment</h1>
            <p className="text-lg opacity-90 mb-8">
              Choose your preferred enrollment method below and begin your medical coding journey today!
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Options - Mobile Enhanced */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            
            {/* Online Form - Mobile Enhanced */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-primary">Online Form</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4">
                <a 
                  href="https://forms.gle/1XEsfKj1P5hBBk6t9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105">
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp Contact - Mobile Enhanced */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-primary">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4">
                <a 
                  href="https://whatsapp.com/channel/0029VbAgerFK5cDGJiW71o1U" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105">
                    Chat Now
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Phone Call - Mobile Enhanced */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-primary">Phone Call</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-4">
                <a href="tel:+919360218322" className="inline-block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105">
                    Call Now
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* YouTube Channel */}
          <div className="mt-8 text-center">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Youtube className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Watch Our Videos</h3>
            <a 
              href="https://www.youtube.com/channel/UCNJJ-j7gVqu13-MeALnmjuA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                Visit YouTube Channel
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Back to Courses */}
          <div className="text-center mt-8">
            <Link to="/courses">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;