import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', 'Course Registration');
      formDataToSend.append('message', `Registration Details:\nCourse: ${formData.course}\nExperience: ${formData.experience}\nMessage: ${formData.message}`);
      // Add recipient email to form data
      formDataToSend.append('recipient', 'info.nexgenhealth@gmail.com');

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz09z2z8EeK89nIDAI_2cQwWorMMieY0sm3Sb4QCRvTi8c9-Xz2RwLxYCtmV5HAa6Iy/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        message: ""
      });

      alert("Registration submitted successfully!");
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Error submitting registration. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const courses = [
    "Basic Medical Coding Training (BMCT) – 35 Days",
    "Advanced Medical Coding Training (AMCT)",
    "CPC-Certified Professional Coder Certification Training – AAPC (CPC)",
    "CRC-Certified Risk Adjustment Coder Training (CRC)",
    "CCS – Certified Coding Specialist Training",
    "CPMA – Certified Professional Medical Auditor Training",
    "COC – Certified Outpatient Coder",
    "Specialty Evaluation and Management Training (Specialty E&M)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner Section */}
      <section className="pt-32 pb-16 bg-gradient-hero bg-geometric">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Course Registration
          </h1>
          <nav className="text-gray-600">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Registration</span>
          </nav>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Start your journey to becoming a certified medical coding professional
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register for Medical Coding Training</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange("course", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course, index) => (
                        <SelectItem key={index} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience in Healthcare/Medical Field
                </label>
                <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-experience">No Experience</SelectItem>
                    <SelectItem value="less-than-1-year">Less than 1 year</SelectItem>
                    <SelectItem value="1-3-years">1-3 years</SelectItem>
                    <SelectItem value="3-5-years">3-5 years</SelectItem>
                    <SelectItem value="more-than-5-years">More than 5 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message or Questions
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your goals, questions, or any specific requirements..."
                  className="h-32 resize-none"
                />
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Comprehensive medical coding training
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Industry-recognized certification preparation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    100% placement assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Expert trainer guidance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Practical hands-on experience
                  </li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-lg"
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;