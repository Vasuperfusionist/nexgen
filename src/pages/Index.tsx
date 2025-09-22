import { Link } from "react-router-dom";
import HomeLayout from "@/components/HomeLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award, Star, ChevronRight, GraduationCap, Target, Clock, CheckCircle, Smartphone } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useState, useEffect, useRef } from "react";
import RequestCallBackModal from "@/components/RequestCallBackModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const coursesRef = useRef<HTMLElement>(null);
  
  const stats = [
    { number: 14, displayNumber: "14", label: "Online Courses" },
    { number: 20, displayNumber: "20+", label: "Top Instructors" },
    { number: 12, displayNumber: "12", label: "Certified Courses" },
    { number: 5000, displayNumber: "5K+", label: "Students" }
  ];

  const count1 = useCountAnimation(14, 2000);
  const count2 = useCountAnimation(20, 2000);
  const count3 = useCountAnimation(12, 2000);
  const count4 = useCountAnimation(5000, 2000);
  
  const counters = [count1, count2, count3, count4];

  // Smooth scroll to courses section
  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const courses = [
    {
      title: "CPC Certification",
      duration: "60 Days",
      language: "English/Tamil",
      image: "/lovable-uploads/64516649-08ad-4e2b-9617-116d2430fdb1.png",
      path: "/courses/cpc"
    },
    {
      title: "IPDRG Training",
      duration: "30 Days", 
      language: "English",
      image: "/lovable-uploads/1af69286-8756-4404-b4b5-3088813083f6.png",
      path: "/courses/ipdrg"
    },
    {
      title: "CRC Certification",
      duration: "45 Days",
      language: "English",
      image: "/lovable-uploads/6c4dfec2-de92-41b2-803f-1099f8746338.png",
      path: "/courses/crc"
    },
    {
      title: "CCS Training",
      duration: "75 Days",
      language: "English",
      image: "/lovable-uploads/fbfa71d4-9f10-4739-8fe3-b55cd8996bd4.png",
      path: "/courses/ccs"
    },
    {
      title: "Basic Medical Coding",
      duration: "45 Days",
      language: "English/Tamil",
      image: "/lovable-uploads/4e247b8b-5d07-4d2e-8238-37d02b446d04.png",
      path: "/courses/bmct"
    },
    {
      title: "E&M Speciality",
      duration: "30 Days",
      language: "English",
      image: "/lovable-uploads/6ea48fb9-3920-4823-a310-6b88809b85fd.png",
      path: "/courses/em"
    },
    {
      title: "ED Speciality",
      duration: "30 Days",
      language: "English", 
      image: "/lovable-uploads/2a83033c-def5-40af-baa3-47e752c65671.png",
      path: "/courses/ed"
    },
    {
      title: "Comprehensive Training",
      duration: "90 Days",
      language: "English/Tamil",
      image: "/lovable-uploads/c362593e-99c2-4553-9d4a-e6e7f602439e.png",
      path: "/courses/cmct"
    }
  ];

  const resultStats = [
    { number: "5K+", label: "Student Enrolled" },
    { number: "10K+", label: "Classes Completed" },
    { number: "20+", label: "Top Instructors" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Excellent training program with practical approach. The instructors are amazing!",
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Kumar", 
      text: "Got placed immediately after certification. Thank you Nexgen!",
      image: "/placeholder.svg"
    },
    {
      name: "Ankita Malshikhare",
      text: "Best medical coding institute in Chennai. Highly recommend!",
      image: "/placeholder.svg"
    },
    {
      name: "Keerthi Priya",
      text: "Scored 95% in CPC exam. Great teaching methodology!",
      image: "/placeholder.svg"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <HomeLayout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 lg:pt-44 pb-16 hero-animated-bg bg-geometric relative overflow-hidden">
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                  Be Educated!
                </span><br />
                <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                  Feel Empowered!
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-in-bottom max-w-2xl mx-auto lg:mx-0">
                India's Premier Medical Coding Training Institute offering comprehensive 
                certification programs with guaranteed placement assistance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-in-bottom justify-center lg:justify-start" style={{animationDelay: '0.3s'}}>
                <Button 
                  size="lg" 
                  onClick={scrollToCourses}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-4 text-base sm:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl w-full sm:w-auto"
                >
                  Find courses <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <RequestCallBackModal>
                  <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 text-base sm:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto border-primary hover:border-primary-dark rounded-xl">
                    Request Call Back ➜
                  </Button>
                </RequestCallBackModal>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative z-10">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    {courses.slice(0, 5).map((course, index) => (
                      <CarouselItem key={index}>
                        <Link to={course.path} className="block">
                          <div className="course-card bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                            <div className="overflow-hidden rounded-xl mb-4">
                              <img 
                                src={course.image} 
                                alt={course.title}
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors duration-300">
                              {course.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                                {course.duration}
                              </span>
                              <span className="bg-gray-100 px-4 py-2 rounded-full">
                                {course.language}
                              </span>
                            </div>
                            <div className="flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
                              <span>Explore Course</span>
                              <ChevronRight className="h-5 w-5 ml-2 hover:translate-x-2 transition-transform duration-300" />
                            </div>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12" />
                </Carousel>
                
                <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full floating"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/20 rounded-full floating" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-5 w-12 h-12 bg-accent/20 rounded-full floating" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-success/20 rounded-full floating" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </section>


      {/* Learner Statistics & Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Animated Metric Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="metric-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 floating">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-gray-600 font-medium">Learners & counting</div>
                </div>
              </div>

              <div className="metric-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 floating" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-success" />
                  </div>
                  <div className="text-3xl font-bold text-success mb-2">8,000+</div>
                  <div className="text-gray-600 font-medium">CPC Certified Students</div>
                </div>
              </div>

              <div className="metric-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 floating" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-secondary mb-2">1,000+</div>
                  <div className="text-gray-600 font-medium">CCS Certified Students</div>
                </div>
              </div>

              <div className="metric-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100 floating" style={{animationDelay: '1.5s'}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">5,000+</div>
                  <div className="text-gray-600 font-medium">Students working as Medical Coders</div>
                </div>
              </div>
            </div>

            {/* Right side - Benefits */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering You with<br />
                <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Expertise and Support</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands of successful medical coding professionals who have transformed their careers 
                with our comprehensive training programs and ongoing support system.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Trainers</h3>
                    <p className="text-gray-600 text-sm">Industry professionals with years of coding experience</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center group-hover:bg-success/20 transition-colors duration-300">
                    <BookOpen className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Comprehensive Curriculum</h3>
                    <p className="text-gray-600 text-sm">Complete coverage of medical coding standards and practices</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Career Support</h3>
                    <p className="text-gray-600 text-sm">100% placement assistance and career guidance</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Personalized Attention</h3>
                    <p className="text-gray-600 text-sm">Small batch sizes ensuring individual focus</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Interactive Learning</h3>
                    <p className="text-gray-600 text-sm">Hands-on practice with real medical scenarios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Highlights Strip */}
      <section className="stats-strip">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up stats-counter cursor-pointer"
                onMouseEnter={() => counters[index].startAnimation()}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                  {index === 1 ? `${counters[index].count}+` : 
                   index === 3 ? `${Math.floor(counters[index].count / 1000)}K+` : 
                   counters[index].count}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Nexgen Healthcare Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Nexgen Healthcare Solutions</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Nexgen, we specialize in training the next generation of certified medical coders. 
                Whether you're just starting or aiming for certifications like CPC, CRC, or CCS, our 
                expert-led courses are designed to get you certified and job-ready.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://forms.gle/1XEsfKj1P5hBBk6t9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    aria-label="Join Nexgen training program"
                  >
                    Join Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-4 text-lg hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto"
                    aria-label="Learn more about Nexgen Healthcare Solutions"
                  >
                    Learn More →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Image & Metrics */}
            <div className="relative animate-slide-in-right">
              {/* Professional Group Image */}
              <div className="relative mb-8">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/bd14bc37-c1cf-4646-8a5e-2a7173c2eda2.png" 
                    alt="Group of professionals working in modern healthcare technology environment"
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7+</div>
                    <div className="text-sm text-gray-600 font-medium">Years of Experience</div>
                  </div>
                </div>
              </div>

              {/* Main Stats Box Layout */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="metric-card bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-slide-up-down hover:shadow-xl transition-all duration-300" role="region" aria-label="Student enrollment statistics">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">5K+</div>
                    <div className="text-sm text-gray-600 font-medium">STUDENT ENROLLED</div>
                  </div>
                </div>

                <div className="metric-card bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-slide-up-down hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.5s'}} role="region" aria-label="Classes completed statistics">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="h-6 w-6 text-success" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-success mb-1">10K+</div>
                    <div className="text-sm text-gray-600 font-medium">CLASSES COMPLETED</div>
                  </div>
                </div>

                <div className="metric-card bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-slide-up-down hover:shadow-xl transition-all duration-300" style={{animationDelay: '1s'}} role="region" aria-label="Top instructors statistics">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-1">20+</div>
                    <div className="text-sm text-gray-600 font-medium">TOP INSTRUCTORS</div>
                  </div>
                </div>

                <div className="metric-card bg-white rounded-xl p-4 shadow-lg border border-gray-100 animate-slide-up-down hover:shadow-xl transition-all duration-300" style={{animationDelay: '1.5s'}} role="region" aria-label="Satisfaction rate statistics">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-medium">SATISFACTION RATE</div>
                  </div>
                </div>
              </div>

              {/* Feature Highlights with Icons */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-primary text-lg">10+</span>
                    <span className="text-gray-700 ml-2">Online Courses (Intro to CPC, CRC, CCS)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-success" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-success text-lg">10+</span>
                    <span className="text-gray-700 ml-2">Expert Trainers (CPC, CCS, CRC Certified)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-secondary text-lg">25+</span>
                    <span className="text-gray-700 ml-2">Batches Completed (Weekday & Weekend)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-accent text-lg">100%</span>
                    <span className="text-gray-700 ml-2">Students Satisfaction Rate</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full floating"></div>
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-secondary/10 rounded-full floating" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-6 right-1/3 w-10 h-10 bg-accent/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Grid */}
      <section ref={coursesRef} className="py-16 bg-gray-50" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pick A Course To Get Started
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of medical coding certification programs 
              designed to launch your career in healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {courses.slice(0, 4).map((course, index) => (
              <Link key={index} to={course.path} className="group">
                <div 
                  className="course-card bg-white rounded-xl p-6 shadow-md border border-gray-100 animate-slide-horizontal"
                  style={{animationDelay: `${index * 0.8}s`}}
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {course.duration}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {course.language}
                    </span>
                  </div>
                  <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors duration-300">
                    <span>Learn More</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* WhatsApp Navigation Card */}
          <div className="mb-8">
            <a 
              href="https://whatsapp.com/channel/0029VbAgerFK5cDGJiW71o1U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up">
                <div className="flex items-center justify-center space-x-6 text-white">
                  <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                    <Smartphone className="h-12 w-12" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Join Our WhatsApp Channel</h3>
                    <p className="text-white/90 mb-4">Get instant updates, tips, and connect with fellow medical coders</p>
                    <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-full px-6 py-2 backdrop-blur-sm">
                      <span className="font-semibold">Click to Join</span>
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm floating">
                    <Users className="h-12 w-12" />
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="text-center">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="px-8 py-3 hover:bg-primary hover:text-white transition-all duration-300">
                Browse more courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Have To Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from our successful graduates who are now thriving in their careers
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * (100 / testimonials.length)}%)`,
                width: `${testimonials.length * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-md hover-lift min-w-0 flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <Link to="/results" className="text-secondary font-medium hover:underline">
                    read testimonial ➜
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Centered CTA Section */}
      <section className="py-8 flex justify-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-dots opacity-10"></div>
            <div className="relative z-10 px-8 py-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to Transform Your Career in Medical Coding?
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 mb-6">
                <div className="flex items-center text-sm">
                  <span className="font-semibold mr-2">Email:</span>
                  <span>info.nexgenhealth@gmail.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-semibold mr-2">Phone:</span>
                  <span>9360218322</span>
                </div>
              </div>
              <RequestCallBackModal>
                <Button className="bg-white text-primary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-6 py-2 rounded-full font-semibold">
                  Get Started Today ➜
                </Button>
              </RequestCallBackModal>
            </div>
          </div>
        </div>
      </section>

    </HomeLayout>
  );
};

export default Index;
