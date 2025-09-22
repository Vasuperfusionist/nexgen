import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Clock, Users, Star, Share2, CheckCircle, Home, ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle, Copy } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();

  // Course data mapping
  const courseData: Record<string, any> = {
    amct: {
      title: "Advanced Medical Coding Training (AMCT)",
      duration: "120 Days",
      mode: "Online / Offline",
      rating: 4.9,
      fee: "₹30,000",
      description: "Advanced medical coding program covering complex procedures, speciality coding, and advanced certification preparation.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    bmct: {
      title: "Basic Medical Coding Training (BMCT)",
      duration: "45 Days",
      mode: "Online / Offline",
      rating: 4.8,
      fee: "₹15,000",
      description: "Comprehensive introduction to medical coding fundamentals covering anatomy, physiology, and basic coding principles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    cpc: {
      title: "CPC Certification Training",
      duration: "60 Days", 
      mode: "Online / Offline",
      rating: 4.9,
      fee: "₹20,000",
      description: "Professional CPC certification training with hands-on practice and exam preparation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    cmct: {
      title: "Comprehensive Medical Coding Training (CMCT)",
      duration: "90 Days",
      mode: "Online / Offline", 
      rating: 4.9,
      fee: "₹25,000",
      description: "Complete medical coding program covering all aspects from basics to advanced specializations.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    ipdrg: {
      title: "IPDRG Speciality Training",
      duration: "30 Days",
      mode: "Online",
      rating: 4.7,
      fee: "₹12,000",
      description: "Specialized training in Inpatient Diagnosis Related Groups for hospital coding.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    em: {
      title: "E&M Speciality Training", 
      duration: "30 Days",
      mode: "Online",
      rating: 4.8,
      fee: "₹12,000",
      description: "Focused training on Evaluation and Management coding for physician services.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    ed: {
      title: "ED Speciality Training",
      duration: "30 Days", 
      mode: "Online",
      rating: 4.7,
      fee: "₹12,000",
      description: "Emergency Department coding specialization with case studies and practical scenarios.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    crc: {
      title: "Certified Risk Adjustment Coder (CRC)",
      duration: "45 Days",
      mode: "Online / Offline",
      rating: 4.8,
      fee: "₹18,000", 
      description: "Specialized training in risk adjustment coding for healthcare quality and payment systems.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    ccs: {
      title: "Certified Coding Specialist (CCS)",
      duration: "75 Days",
      mode: "Online / Offline",
      rating: 4.9,
      fee: "₹22,000",
      description: "Advanced hospital-based coding certification focusing on ICD-10-CM/PCS systems.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  };

  const course = courseData[courseId || 'bmct'];

  const benefits = [
    "Industry-relevant certification",
    "100% placement support", 
    "Personalized mentorship",
    "Live doubt resolution sessions",
    "Free study materials",
    "Mock exams and assessments"
  ];

  const courseContent = [
    "Medical Terminology & Anatomy",
    "ICD-10-CM/PCS Coding Systems", 
    "CPT and HCPCS Coding",
    "Medical Chart Reading",
    "Coding Guidelines & Compliance",
    "Practical Coding Exercises"
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b bg-cover bg-center bg-blend-overlay relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Course Banner */}
      <section className="pt-16 pb-16 bg-blue-100 bg-cover bg-center bg-blend-overlay relative" style={{ backgroundImage: `url(${course.image})` }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                {course.title}
              </h1>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{course.mode}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-600">{course.rating}/5</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem
                      onClick={() => {
                        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                        window.open(url, '_blank', 'width=600,height=400');
                      }}
                      className="cursor-pointer"
                    >
                      <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                      Share on Facebook
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Check out this amazing course: ${course.title}`)}`;
                        window.open(url, '_blank', 'width=600,height=400');
                      }}
                      className="cursor-pointer"
                    >
                      <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                      Share on Twitter
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                        window.open(url, '_blank', 'width=600,height=400');
                      }}
                      className="cursor-pointer"
                    >
                      <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
                      Share on LinkedIn
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        const url = `https://wa.me/?text=${encodeURIComponent(`Check out this amazing course: ${course.title} ${window.location.href}`)}`;
                        window.open(url, '_blank');
                      }}
                      className="cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
                      Share on WhatsApp
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Course link copied to clipboard!');
                      }}
                      className="cursor-pointer"
                    >
                      <Copy className="h-4 w-4 mr-2 text-gray-600" />
                      Copy Link
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">{course.fee}</div>
                <p className="text-gray-600">Course Fee</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mode:</span>
                  <span className="font-semibold">{course.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-semibold">{course.rating}/5</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg"
                onClick={() => window.open('/enrollment', '_blank')}
              >
                Enroll Now ➜
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {course.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive training program is designed to provide you with the essential 
                  skills and knowledge required to excel in medical coding. Our expert instructors 
                  bring years of industry experience to ensure you receive practical, hands-on training.
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseContent.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who is this course for */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is This Course For?</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Recent graduates looking to start a career in healthcare</li>
                  <li>• Healthcare professionals seeking certification</li>
                  <li>• Career switchers interested in medical coding</li>
                  <li>• Students pursuing healthcare administration</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Get In Touch</h3>
                  <Button 
                    className="w-full bg-success hover:bg-success/90 text-white"
                    onClick={() => window.open('https://whatsapp.com/channel/0029VbAgerFK5cDGJiW71o1U', '_blank')}
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Course Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✓ Live online classes</li>
                  <li>✓ Recorded sessions access</li>
                  <li>✓ Industry expert instructors</li>
                  <li>✓ Certification upon completion</li>
                  <li>✓ Job placement assistance</li>
                  <li>✓ 24/7 doubt support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;