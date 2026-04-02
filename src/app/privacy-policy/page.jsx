import React from "react";
import LegalLayout from "../components/legal-layout";

export const metadata = {
  title: "Privacy Policy | Neutron",
  description: "Privacy policy for Neutron - NST Tech Fest.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 2, 2026">
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          NeutronFest ("we", "our", or "us") respects your privacy and is
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your
          information when you use our website and register for our events.
        </p>
      </section>

      <section id="data-collection" className="mt-12">
        <h2>2. Information We Collect</h2>
        <p>
          We collect only the information necessary for event management,
          communication, and security. This may include:
        </p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and institution.
          </li>
          <li>
            <strong>Payment Information:</strong> Payment status and transaction
            reference from our payment gateway; we do not store full card
            details on our servers.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser/device data,
            and basic usage analytics for reliability and security.
          </li>
        </ul>
      </section>

      <section id="data-usage" className="mt-12">
        <h2>3. How We Use Your Information</h2>
        <p>We use collected data only for legitimate event-related purposes:</p>
        <ul>
          <li>To process registrations and event participation</li>
          <li>To send confirmations, schedules, and event updates</li>
          <li>To provide support and respond to participant queries</li>
          <li>To improve platform reliability, functionality, and security</li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>
      </section>

      <section id="data-sharing" className="mt-12">
        <h2>4. Disclosure of Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>
            <strong>Event Partners & Sponsors:</strong> Limited to name and
            institution for prize distribution.
          </li>
          <li>
            <strong>Payment Processors:</strong> Razorpay/payment gateway for
            transaction processing.
          </li>
          <li>
            <strong>Service Providers:</strong> Email platforms and hosting
            providers bound by confidentiality obligations.
          </li>
          <li>
            <strong>Legal Authorities:</strong> If required by law, court order,
            or government authority under applicable Indian law.
          </li>
        </ul>
        <p>We do not sell your personal data to third parties.</p>
      </section>

      <section id="method-of-disclosure" className="mt-12">
        <h2>5. Method of Disclosure</h2>
        <p>
          Data is shared electronically through encrypted APIs and secured
          third-party platforms. Physical data is not shared unless legally
          mandated.
        </p>
      </section>

      <section id="security-practices" className="mt-12">
        <h2>6. Security Practices</h2>
        <ul>
          <li>SSL/TLS encryption for data transmission</li>
          <li>Secure, access-controlled databases</li>
          <li>Passwords stored using industry-standard hashing</li>
          <li>Regular security audits and safeguards</li>
          <li>Limited internal access on a need-to-know basis</li>
        </ul>
      </section>

      <section id="cookies" className="mt-12">
        <h2>7. Cookies</h2>
        <p>
          We use cookies to maintain sessions and analyze traffic. You may
          disable cookies in your browser settings, though some features may
          not function properly.
        </p>
      </section>

      <section id="data-retention" className="mt-12">
        <h2>8. Data Retention</h2>
        <p>
          We retain your data only for as long as necessary to fulfill the
          purposes described in this policy, or as required by law.
        </p>
      </section>

      <section id="user-rights" className="mt-12">
        <h2>9. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          data, subject to applicable law. To exercise these rights, contact us
          at <strong>privacy@neutronfest.org</strong>.
        </p>
      </section>

      <section id="contact" className="mt-12">
        <h2>10. Contact</h2>
        <p>
          For any privacy-related concerns, please contact the NeutronFest
          Organizing Committee.
        </p>
        <div className="mt-4 p-4 rounded-lg bg-zinc-900 border border-white/5 font-mono text-sm leading-relaxed">
          Email: contact@neutronfest.org
          <br />
          Website: neutronfest.org
        </div>
      </section>
    </LegalLayout>
  );
}
