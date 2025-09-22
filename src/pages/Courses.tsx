import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SimpleLayout from "@/components/SimpleLayout";

const coursesData = [
  {
    id: "bmct",
    title: "Basic Medical Coding Training (BMCT)",
    duration: "35 Days",
    mode: "Classroom / Online Training",
    description: "Comprehensive foundation course covering essential medical coding principles, anatomy, and basic ICD-10-CM coding skills for beginners.",
    image: "/lovable-uploads/4e247b8b-5d07-4d2e-8238-37d02b446d04.png",
    category: "Foundation"
  },
  {
    id: "amct",
    title: "Advance Medical Coding Training (AMCT)",
    duration: "60 Days",
    mode: "Online Training",
    description: "Advanced coding techniques, complex case studies, and specialized coding scenarios for experienced professionals.",
    image: "/lovable-uploads/c28c280c-0aa3-4891-9483-3f2dce0d11a0.png",
    category: "Advanced"
  },
  {
    id: "cpc",
    title: "CPC - Certified Professional Coder Certification Training (AAPC)",
    duration: "90 Days",
    mode: "Classroom / Online Training",
    description: "Complete AAPC CPC certification preparation with exam strategies, practice tests, and professional coding standards.",
    image: "/lovable-uploads/64516649-08ad-4e2b-9617-116d2430fdb1.png",
    category: "Certification"
  },
  {
    id: "cmct",
    title: "Comprehensive Medical Coding Training (CMCT)",
    duration: "120 Days",
    mode: "Online Training",
    description: "All-inclusive medical coding program covering multiple specialties, certifications, and industry best practices.",
    image: "/lovable-uploads/c362593e-99c2-4553-9d4a-e6e7f602439e.png",
    category: "Comprehensive"
  },
  {
    id: "ipdrg",
    title: "IPDRG - In-Patient Diagnosis-Related Group Training",
    duration: "45 Days",
    mode: "Online Training",
    description: "Specialized training in inpatient coding, DRG optimization, and hospital revenue cycle management.",
    image: "/lovable-uploads/1af69286-8756-4404-b4b5-3088813083f6.png",
    category: "Specialty"
  },
  {
    id: "em",
    title: "Evaluation and Management Training (E&M)",
    duration: "30 Days",
    mode: "Classroom / Online Training",
    description: "Master E&M coding guidelines, documentation requirements, and audit-proof coding practices.",
    image: "/lovable-uploads/6ea48fb9-3920-4823-a310-6b88809b85fd.png",
    category: "Specialty"
  },
  {
    id: "cpma",
    title: "CPMA - Certified Professional Medical Auditor Training",
    duration: "75 Days",
    mode: "Online Training",
    description: "Professional medical auditing skills, compliance protocols, and quality assurance methodologies.",
    image: "/lovable-uploads/3d11efc9-5e30-4dac-87d0-0366cbdf21e9.png",
    category: "Certification"
  },
  {
    id: "crc",
    title: "CRC - Certified Risk Adjustment Coder Training",
    duration: "60 Days",
    mode: "Online Training",
    description: "Risk adjustment coding expertise for Medicare Advantage, HCC coding, and quality metrics.",
    image: "/lovable-uploads/6c4dfec2-de92-41b2-803f-1099f8746338.png",
    category: "Certification"
  },
  {
    id: "ccs",
    title: "CCS - Certified Coding Specialist Training",
    duration: "90 Days",
    mode: "Classroom / Online Training",
    description: "AHIMA CCS certification preparation with hospital coding, ICD-10-PCS, and advanced clinical scenarios.",
    image: "/lovable-uploads/fbfa71d4-9f10-4739-8fe3-b55cd8996bd4.png",
    category: "Certification"
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Foundation", "Advanced", "Certification", "Specialty", "Comprehensive"];
  
  const filteredCourses = selectedCategory === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <SimpleLayout>
      <div className="min-h-screen bg-background">
      
      {/* Enhanced Hero Section with Gradient */}
      <section className="pt-8 pb-12 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-4 opacity-90 animate-slide-in-left">
            <Link to="/" className="hover:text-secondary transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            <span>Courses</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-secondary-light to-white bg-clip-text text-transparent">
                  All Courses
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                Comprehensive medical coding training programs designed for your career success
              </p>
            </div>
            <div className="text-center animate-slide-in-right">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">{coursesData.length}</div>
                <div className="text-white/90">Available Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Course Filter Tabs */}
      <section className="py-8 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`mb-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-primary/10 hover:border-primary"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mobile-First Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 mobile-card-spacing">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="course-card-blue group overflow-hidden border-0 shadow-lg course-card-blue-entrance"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  background: 'linear-gradient(135deg, #1E315C 0%, #E5E4E4 100%)'
                }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Enhanced Course Image */}
                    <div className="lg:w-1/3 xl:w-1/4">
                      <div className="h-48 sm:h-64 lg:h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/20 relative overflow-hidden">
                        {course.image !== "/placeholder.svg" ? (
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative z-10 h-full flex items-center justify-center p-6">
                            <div className="text-center">
                              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Users className="h-10 w-10 text-white" />
                              </div>
                              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-primary/20 text-primary font-medium px-3 py-1 rounded-full">
                                {course.category}
                              </Badge>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Course Details */}
                    <div className="lg:w-2/3 xl:w-3/4 p-6 lg:p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                          <CardTitle className="text-xl md:text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {course.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-3 sm:mt-0 bg-muted/50 rounded-full px-4 py-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                              {course.duration}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4 bg-success/10 rounded-full w-fit px-4 py-2">
                          <Globe className="h-4 w-4 text-success" />
                          <span className="text-sm text-success font-semibold">
                            {course.mode}
                          </span>
                        </div>
                        
                        <CardDescription className="text-base lg:text-lg leading-relaxed text-muted-foreground mobile-text-responsive">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                        <Link to={`/courses/${course.id}`} className="w-full sm:w-auto">
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 border-primary hover:border-primary-dark shadow-md hover:shadow-lg mobile-button-enhanced sm:mobile-button-enhanced:w-auto rounded-full px-8"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </Link>
                        
                        <div className="text-center sm:text-right bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 w-full sm:w-auto">
                          <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                          <p className="text-2xl lg:text-3xl font-bold text-primary">₹15,000</p>
                          <p className="text-xs text-muted-foreground">EMI available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Centered CTA Section */}
      <section className="py-8 flex justify-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-dots opacity-10"></div>
            <div className="relative z-10 px-8 py-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to Start Your Medical Coding Journey?
              </h2>
              <p className="text-base md:text-lg opacity-90 mb-6 max-w-xl mx-auto">
                Join thousands of successful medical coders who transformed their careers with Nexgen Healthcare Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link to="/enrollment">
                  <Button 
                    className="bg-white text-primary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 hover:scale-105 px-6 py-2 rounded-full font-semibold"
                  >
                    Enroll Now ➜
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 px-6 py-2 rounded-full font-semibold backdrop-blur-sm"
                  >
                    Contact Us ➜
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </SimpleLayout>
  );
};

export default Courses;
