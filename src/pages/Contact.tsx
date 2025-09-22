import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Contact form submitted:", formData);
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a form data object to send as form submission
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      // Add recipient email to form data
      formDataToSend.append('recipient', 'info.nexgenhealth@gmail.com');

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxyswv7pM6hGcZdnSMlzqz8cCKydUT9OVr8Z_SNgH6gWdU8OGs8EO0Y2-eoWr4ChI4/exec",
        {
          method: "POST",
          mode: "no-cors", // This prevents redirect issues
          body: formDataToSend,
        }
      );

      // Since we're using no-cors, we can't check response.ok
      // Instead, we'll assume success if no error is thrown
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      

      {/* Contact Content - Mobile Optimized */}
      <section className="pt-64 md:pt-72 py-12 sm:py-24">{/* More space to avoid navbar conflict */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">Get In Touch</h2>
              
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 9360218322</p>
                    <p className="text-gray-600 text-sm sm:text-base">+91 8525849171</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base break-all">info.nexgenhealth@gmail.com</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Mobile Enhanced */}
            <div className="order-1 lg:order-2 bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="py-3 text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      className="py-3 text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="py-3 text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Message subject"
                      className="py-3 text-base"
                    />
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
                    placeholder="Your message..."
                    className="h-32 resize-none text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;
