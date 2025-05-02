
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: May 2, 2025</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using WonderLearn's website and educational assessment platform, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you do not have permission to access the platform.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              WonderLearn provides an online educational assessment platform with practice exams, progress tracking, and performance analytics primarily focused on Australian standardized tests like NAPLAN and ICAS.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.
            </p>
            
            <h2>4. Subscription and Billing</h2>
            <p>
              Some features of our platform require a paid subscription. By subscribing to a paid plan, you agree to pay the subscription fees as described at the time of purchase. Subscription fees are billed in advance and are non-refundable except as expressly provided in these Terms.
            </p>
            <p>
              We may change subscription fees from time to time, but changes will not affect your current subscription period. We will provide you with reasonable notice of any changes in fees before they become effective.
            </p>
            
            <h2>5. Free Trial</h2>
            <p>
              We may offer a free trial period for new users. At the end of the free trial period, your account will automatically convert to a paid subscription unless you cancel before the trial period ends.
            </p>
            
            <h2>6. Cancellation</h2>
            <p>
              You may cancel your subscription at any time through your account settings or by contacting our customer support. Upon cancellation, you will continue to have access to the platform until the end of your current billing period.
            </p>
            
            <h2>7. Intellectual Property</h2>
            <p>
              All content on the WonderLearn platform, including text, graphics, logos, images, and software, is the property of WonderLearn or its content suppliers and is protected by Australian and international copyright laws. The compilation of all content on this platform is the exclusive property of WonderLearn and is protected by Australian and international copyright laws.
            </p>
            
            <h2>8. Prohibited Activities</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul>
              <li>Copying, distributing, or disclosing any part of the platform in any medium</li>
              <li>Using any automated system, such as "robots," "spiders," or "offline readers," to access the platform</li>
              <li>Transmitting spam, chain letters, or other unsolicited communications</li>
              <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the platform</li>
              <li>Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure</li>
              <li>Sharing your account credentials with others or using another user's account without permission</li>
              <li>Uploading invalid data, viruses, worms, or other software agents through the platform</li>
              <li>Collecting or harvesting any personally identifiable information from the platform</li>
              <li>Using the platform for any commercial purposes without our express written consent</li>
            </ul>
            
            <h2>9. Disclaimer of Warranties</h2>
            <p>
              The platform is provided on an "as is" and "as available" basis. WonderLearn makes no representations or warranties of any kind, express or implied, as to the operation of the platform or the information, content, materials, or products included on the platform. To the full extent permissible by applicable law, WonderLearn disclaims all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose.
            </p>
            
            <h2>10. Limitation of Liability</h2>
            <p>
              WonderLearn will not be liable for any damages of any kind arising from the use of this platform, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
            </p>
            
            <h2>11. Governing Law</h2>
            <p>
              These Terms and your use of the platform shall be governed by and construed in accordance with the laws of the State of New South Wales, Australia, without giving effect to any principles of conflicts of law.
            </p>
            
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on the platform and updating the "Last updated" date at the top of this page. Your continued use of the platform after such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              WonderLearn<br />
              Email: legal@wonderlearn.com.au<br />
              Address: Level 5, 123 Education Street, Sydney, NSW 2000, Australia
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
