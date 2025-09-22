import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, User, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RequestCallBackModalProps {
  children: React.ReactNode;
}

const RequestCallBackModal = ({ children }: RequestCallBackModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
    message: ""
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', `Request Callback - Preferred Time: ${formData.preferredTime}`);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('preferredTime', formData.preferredTime);
      // Add recipient email to form data
      formDataToSend.append('recipient', 'info.nexgenhealth@gmail.com');

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxyswv7pM6hGcZdnSMlzqz8cCKydUT9OVr8Z_SNgH6gWdU8OGs8EO0Y2-eoWr4ChI4/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );

      setIsOpen(false);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        preferredTime: "",
        message: ""
      });

      // Beautiful animated toast notification
      toast({
        title: "✅ Request Submitted Successfully!",
        description: "Our team will contact you shortly at your preferred time.",
        duration: 5000,
        className: "animate-scale-in border-green-200 bg-green-50 text-green-800"
      });
    } catch (error) {
      console.error("Error submitting callback request:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
        className: "animate-scale-in"
      });
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white border border-gray-200 shadow-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl font-bold text-primary">
            <Phone className="h-5 w-5" />
            <span>Request Call Back</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Full Name *
            </label>
            <Input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline h-4 w-4 mr-1" />
              Phone Number *
            </label>
            <Input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-1" />
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email (optional)"
              className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Preferred Call Time
            </label>
            <Input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              placeholder="e.g., Tomorrow 2-4 PM"
              className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us what you're interested in..."
              className="h-20 resize-none bg-white border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Call Back"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestCallBackModal;
