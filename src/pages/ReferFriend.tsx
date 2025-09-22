import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Gift, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReferFriend = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourMobile: "",
    friendName: "",
    friendMobile: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.yourName || !formData.yourMobile || !formData.friendName || !formData.friendMobile) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.yourName);
      formDataToSend.append('email', ''); // No email in referral form
      formDataToSend.append('phone', formData.yourMobile);
      formDataToSend.append('subject', 'Friend Referral');
      formDataToSend.append('message', `Referral Details:\nYour Name: ${formData.yourName}\nYour Mobile: ${formData.yourMobile}\nFriend's Name: ${formData.friendName}\nFriend's Mobile: ${formData.friendMobile}`);
      // Add recipient email to form data
      formDataToSend.append('recipient', 'info.nexgenhealth@gmail.com');

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyn-PLC0ypy8G6_MRYh4Ycyi4_1y8v4nVaso6xF0p9i8ZaZOc6qBcd7432lMREVMwiw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }
      );
      
      toast({
        title: "Referral Submitted Successfully!",
        description: "We'll contact both you and your friend soon with special offers.",
      });

      // Reset form
      setFormData({
        yourName: "",
        yourMobile: "",
        friendName: "",
        friendMobile: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 opacity-90">
            <Link to="/" className="hover:text-orange-200 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Refer a Friend</span>
          </nav>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refer a Friend</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Share the opportunity with your friends and both of you can benefit from special discounts and rewards!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">You Get Rewards</h3>
                <p className="text-muted-foreground">Earn up to ₹2,000 cashback for every successful referral</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Friend Gets Discount</h3>
                <p className="text-muted-foreground">Your friend receives 15% discount on course enrollment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Win-Win Situation</h3>
                <p className="text-muted-foreground">Both parties benefit from our referral program</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Referral Form</CardTitle>
                <CardDescription className="text-base">
                  Fill in your details and your friend's information to start the referral process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Your Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary border-b pb-2">Your Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="yourName">Your Name *</Label>
                        <Input
                          id="yourName"
                          name="yourName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.yourName}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="yourMobile">Your Mobile Number *</Label>
                        <Input
                          id="yourMobile"
                          name="yourMobile"
                          type="tel"
                          placeholder="Enter your mobile number"
                          value={formData.yourMobile}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Friend's Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary border-b pb-2">Friend's Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="friendName">Friend's Name *</Label>
                        <Input
                          id="friendName"
                          name="friendName"
                          type="text"
                          placeholder="Enter friend's full name"
                          value={formData.friendName}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="friendMobile">Friend's Mobile Number *</Label>
                        <Input
                          id="friendMobile"
                          name="friendMobile"
                          type="tel"
                          placeholder="Enter friend's mobile number"
                          value={formData.friendMobile}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Referral"}
                    </Button>
                  </div>

                  {/* Terms */}
                  <div className="text-sm text-muted-foreground text-center pt-4 border-t">
                    <p>
                      By submitting this form, you agree to our{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms & Conditions
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Back Navigation */}
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReferFriend;