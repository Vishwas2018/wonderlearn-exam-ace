
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen animated-bg">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-elevatEd-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                <span className="bg-gradient-to-r from-elevatEd-500 to-secondary bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you. Our team is here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form and info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <Card className="overflow-hidden border-elevatEd-200 shadow-lg glow-container">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-elevatEd-800">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                        <Input id="firstName" required className="border-elevatEd-200 focus:border-elevatEd-500" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                        <Input id="lastName" required className="border-elevatEd-200 focus:border-elevatEd-500" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" required className="border-elevatEd-200 focus:border-elevatEd-500" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" required className="border-elevatEd-200 focus:border-elevatEd-500" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" rows={5} required className="border-elevatEd-200 focus:border-elevatEd-500" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-elevatEd-500 hover:bg-elevatEd-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact information */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6 text-elevatEd-800">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-elevatEd-100 shadow-md hover:shadow-lg transition-shadow hover-scale">
                    <CardContent className="p-6 flex gap-4">
                      <Mail className="h-6 w-6 text-elevatEd-500" />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email</h3>
                        <p className="text-gray-600">support@elevatEdaccess.com.au</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-elevatEd-100 shadow-md hover:shadow-lg transition-shadow hover-scale">
                    <CardContent className="p-6 flex gap-4">
                      <Phone className="h-6 w-6 text-elevatEd-500" />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Phone</h3>
                        <p className="text-gray-600">+61 2 8888 8888</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-elevatEd-100 shadow-md hover:shadow-lg transition-shadow hover-scale">
                    <CardContent className="p-6 flex gap-4">
                      <MapPin className="h-6 w-6 text-elevatEd-500" />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Address</h3>
                        <p className="text-gray-600">
                          Level 5, 123 Education Street<br />
                          Sydney, NSW 2000<br />
                          Australia
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-elevatEd-100 shadow-md hover:shadow-lg transition-shadow hover-scale">
                    <CardContent className="p-6 flex gap-4">
                      <Clock className="h-6 w-6 text-elevatEd-500" />
                      <div>
                        <h3 className="text-lg font-medium mb-1">Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM AEST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-elevatEd-100 shadow-md mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="h-6 w-6 text-elevatEd-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">Need Help?</h3>
                        <p className="text-gray-600">
                          For immediate assistance with exam preparation or technical issues, 
                          please contact our support team. We're committed to helping students excel.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
