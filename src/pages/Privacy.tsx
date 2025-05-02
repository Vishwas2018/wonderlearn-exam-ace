
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container py-16">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last updated: May 2, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              At WonderLearn, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online educational assessment platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We collect information in several ways:</p>
            <ul>
              <li><strong>Personal Information:</strong> When you register for an account, we collect your name, email address, password, and role (student, parent, or educator).</li>
              <li><strong>Student Information:</strong> For student accounts, we may collect additional information such as age, grade level, and school name.</li>
              <li><strong>Usage Data:</strong> We automatically collect information on how you interact with our platform, including exam attempts, answers provided, time spent on questions, and overall performance metrics.</li>
              <li><strong>Device Information:</strong> We collect information about the device you use to access our platform, including IP address, browser type, and operating system.</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our educational platform</li>
              <li>Personalize your experience and deliver content relevant to your educational needs</li>
              <li>Track and analyze your progress and performance on assessments</li>
              <li>Generate performance reports and analytics</li>
              <li>Communicate with you about updates, features, and promotional offers</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
            
            <h2>Sharing Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>With Parents and Teachers:</strong> If you are a student, we may share your performance data with your parents or teachers who have appropriate access to your account.</li>
              <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf, such as hosting, data analysis, and customer service.</li>
              <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to valid requests from public authorities.</li>
              <li><strong>Business Transfers:</strong> If WonderLearn is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise these rights, please contact us using the details provided below.</p>
            
            <h2>Children's Privacy</h2>
            <p>
              Our platform is designed to be used by students of all ages, including children under 13. When a child under 13 uses our platform, we collect only the information necessary to provide our educational services. We require parental consent before collecting personal information from children under 13 in compliance with the Children's Online Privacy Protection Act (COPPA).
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this policy. You are advised to review this privacy policy periodically for any changes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p>
              WonderLearn<br />
              Email: privacy@wonderlearn.com.au<br />
              Address: Level 5, 123 Education Street, Sydney, NSW 2000, Australia
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
