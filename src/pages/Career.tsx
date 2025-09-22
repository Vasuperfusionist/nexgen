import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const Career = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    toast({
      title: "Submitting application...",
      description: "Please wait while we process your application.",
    });
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', 'Career Application');
      formDataToSend.append('message', `Career Application Details:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}\n\nResume: ${selectedFile ? selectedFile.name : 'No file attached'}`);
      // Add recipient email to form data
      formDataToSend.append('recipient', 'info.nexgenhealth@gmail.com');
      
      // Add the resume file if one is selected
      if (selectedFile) {
        formDataToSend.append('resume', selectedFile);
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxAldTBInqIAcgH_m5g5k52qQFBBzmVGGdzjwwVcNBU9d4F8jl9Oy3PWdmD0uzDoiDV/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: ""
      });
      setSelectedFile(null);

      // Show success message
      toast({
        title: "✅ Application submitted successfully!",
        description: "Thank you for your interest! We'll review your application and get back to you within 2-3 business days.",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "❌ Error submitting application",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File input changed:', e.target.files);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log('Selected file:', file.name, file.size, file.type);
      setSelectedFile(file);
      toast({
        title: "File selected",
        description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      

      {/* Form Section */}
      <section className="pt-64 md:pt-60 pb-20">{/* More space to avoid navbar conflict */}
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Just Drop Us a Line
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email or Username *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>

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
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume Upload *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload your resume</p>
                    <p className="text-sm text-gray-400">PDF, DOC, DOCX up to 10MB</p>
                    {selectedFile && (
                      <p className="text-green-600 mt-2 font-medium">
                        ✓ {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="resume-upload"
                      className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary-dark transition-colors"
                    >
                      {selectedFile ? 'Change File' : 'Choose File'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself and why you're interested in joining our team"
                    className="w-full h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg"
                >
                  Submit Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed top-1/2 left-10 w-20 h-20 bg-primary/10 rounded-full -z-10 floating"></div>
      <div className="fixed top-1/3 right-10 w-16 h-16 bg-secondary/10 rounded-full -z-10 floating" style={{animationDelay: '2s'}}></div>
      <div className="fixed bottom-1/4 left-1/4 w-12 h-12 bg-success/10 rounded-full -z-10 floating" style={{animationDelay: '4s'}}></div>

      <Footer />
    </div>
  );
};

export default Career;
