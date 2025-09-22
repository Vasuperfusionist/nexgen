import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutLayout from "@/components/AboutLayout";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, BookOpen, CheckCircle, Star, Clock, GraduationCap, Smartphone, ChevronRight, ArrowRight } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import successStory from "@/assets/success-story.jpg";
import aiLearning from "@/assets/ai-learning.jpg";

const About = () => {
  const stats = [
    { number: "5K+", label: "Students Enrolled" },
    { number: "10K+", label: "Classes Completed" },
    { number: "20+", label: "Top Instructors" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const whyChooseFeatures = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Trainers",
      description: "Certified professionals (CPC, CRC, CCS) with real-world experience."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Complete Certification Guidance", 
      description: "AAPC and AHIMA exam prep: CPC, CRC, CCS, and more."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Live + Recorded Classes",
      description: "Flexibility with live interaction and revision-friendly recordings."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Industry-Aligned Curriculum",
      description: "Covers ICD-10-CM, CPT, HCPCS, HCC, etc."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "100% Placement Assistance",
      description: "Resume building, mock interviews, job referrals."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Affordable Fees with EMI Options",
      description: "EMI plans available for budget-friendly learning."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Hands-on Practice & Assessments",
      description: "Mock tests, real coding, assignments."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Small Batch Size", 
      description: "More personal attention and student engagement."
    }
  ];

  const careerAccelerator = [
    {
      icon: "🌟",
      title: "Not Just a Training Institute — A Launchpad for Your Coding Career"
    },
    {
      icon: "🧠", 
      title: "Next-Gen Curriculum, Industry-Ready Skills",
      description: "Focused on ICD-10, CPT, HCC, HCPCS with real-world coding and compliance training."
    },
    {
      icon: "🤖",
      title: "Smart Learning with AI & Interactive Tools", 
      description: "AI-powered assessments, dashboards, gamified coding challenges."
    },
    {
      icon: "🌍",
      title: "Certified Mentors with Global Exposure"
    }
  ];

  return (
    <AboutLayout>
      {/* Breadcrumb Navigation */}
      <section className="pt-16 pb-8 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-white text-sm mb-4 opacity-90">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white/90 text-lg">Learn more about our mission and values</p>
        </div>
      </section>

      {/* Why Choose Nexgen Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-yellow-300">Nexgen Healthcare Solutions</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Not just training — we build careers in medical coding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover-lift animate-fade-in-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <p className="text-lg text-white font-semibold mb-4">
              👉 Join the Nexgen community and take the first step toward a high-paying healthcare career!
            </p>
            <a 
              href="https://forms.gle/1XEsfKj1P5hBBk6t9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 text-lg">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower aspiring healthcare professionals with world-class medical coding education, 
                  transforming them into globally competent, ethical, and industry-ready coders through 
                  innovation, technology, and excellence.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/10 to-success/10 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-10 w-10 text-secondary mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <span>Deliver high-quality, practical, and affordable medical coding education.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <span>Integrate AI and advanced tech for future-ready skills.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <span>Ensure 100% job placement support and long-term success.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <span>Promote a culture of professionalism, compliance, and continuous learning.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                    <span>Build India's most trusted brand in medical coding training.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
              <img 
                src={studentsLearning}
                alt="Students learning" 
                className="rounded-2xl shadow-lg hover-lift"
              />
              <img 
                src={aiLearning}
                alt="AI learning tools" 
                className="rounded-2xl shadow-lg hover-lift mt-8"
              />
              <img 
                src={successStory}
                alt="Success story" 
                className="rounded-2xl shadow-lg hover-lift -mt-8"
              />
              <img 
                src={studentsLearning}
                alt="Medical coding training" 
                className="rounded-2xl shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 stats-strip">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-slide-up-down stats-counter"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Choose Nexgen */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Students Choose <span className="text-primary">Nexgen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use a vibrant layout with emojis/icons next to titles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {careerAccelerator.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift animate-fade-in-up group"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Accelerator Block */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-12 text-center animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-8">Career Accelerator: From Training to Placement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Expert Training</h4>
                <p className="text-sm opacity-90">Training by CPC/CRC certified experts with U.S. placement experience.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Real-world Scenarios</h4>
                <p className="text-sm opacity-90">Real-world scenarios, internship support, and job referrals.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Flexible Timings</h4>
                <p className="text-sm opacity-90">Choose weekday or weekend batches.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <BookOpen className="h-12 w-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Live + Recorded</h4>
                <p className="text-sm opacity-90">Live + recorded classes for convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial & Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories & Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni who have transformed their careers with Nexgen training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
                <div className="flex items-center mb-6">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "The training at Nexgen was comprehensive and practical. The instructors 
                  were very supportive and helped me understand complex medical coding concepts 
                  with ease. I'm now successfully working as a certified medical coder earning 
                  3x my previous salary!"
                </p>
                <div className="flex items-center">
                  <img 
                    src={successStory}
                    alt="Ankita Malshikhare" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Ankita Malshikhare</h4>
                    <p className="text-primary font-semibold">CPC Certified Graduate</p>
                    <p className="text-gray-600 text-sm">Working at Apollo Healthcare</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-6 border border-success/20">
                <h4 className="font-bold text-gray-900 mb-3">📈 Alumni Success Metrics</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-success">95%</div>
                    <div className="text-sm text-gray-600">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3x</div>
                    <div className="text-sm text-gray-600">Average Salary Increase</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <img 
                src={studentsLearning}
                alt="Students studying" 
                className="rounded-2xl shadow-2xl hover-lift mb-8"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Want to be our next success story?</h4>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg">
                    Learn more about the Campus <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </AboutLayout>
  );
};

export default About;
