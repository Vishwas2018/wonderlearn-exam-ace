
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Faq = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Find answers to common questions about WonderLearn.
            </p>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">What is WonderLearn?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  WonderLearn is an educational platform designed to help Australian students prepare for standardized tests like NAPLAN and ICAS through practice exams, progress tracking, and performance analytics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How does WonderLearn help students prepare for exams?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  WonderLearn provides practice exams that closely mirror the format and content of official tests, detailed explanations for answers, progress tracking to identify areas of improvement, and personalized recommendations based on performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">What age groups is WonderLearn suitable for?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  WonderLearn is designed for students in Years 2-12, with content and difficulty levels tailored to each year group according to the Australian curriculum.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How much does WonderLearn cost?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  WonderLearn offers various subscription plans starting from $9.99 per month. We also offer family discounts and special rates for schools. Visit our pricing page for detailed information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">Is there a free trial available?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  Yes, we offer a 7-day free trial for new users to explore our platform before committing to a subscription.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">Can I cancel my subscription at any time?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll retain access until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How do I track my child's progress?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  Parents can access detailed performance reports showing their child's progress over time, areas of strength and weakness, and recommendations for improvement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">Do you offer support for schools?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  Yes, we have special plans for educational institutions that include bulk student accounts, teacher dashboards, and class performance reports. Contact us for more information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How often is content updated?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  We regularly update our content to align with the latest curriculum changes and exam formats. We also add new practice exams and features throughout the year.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium px-4">How can I get help if I have questions?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  You can reach our support team via email at support@wonderlearn.com.au or through the contact form on our website. We aim to respond to all inquiries within 24 hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
