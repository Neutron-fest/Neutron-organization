import React from "react";
import LegalLayout from "../components/legal-layout";

export const metadata = {
  title: "Terms of Service | Neutron",
  description: "Terms and conditions for Neutron - NST Tech Fest.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 2, 2026">
      <section id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing neutronfest.org or registering for NeutronFest, you
          agree to these Terms. If you do not agree, please do not use this
          website.
        </p>
      </section>

      <section id="eligibility" className="mt-12">
        <h2>2. Eligibility</h2>
        <p>
          Participation is open to currently enrolled students with a valid
          college ID, unless otherwise specified for a particular event. By
          registering, you confirm that you meet all eligibility requirements.
        </p>
      </section>

      <section id="registration" className="mt-12">
        <h2>3. Registration</h2>
        <ul>
          <li>All registrations must be completed through the official website.</li>
          <li>Accurate information must be provided at the time of registration.</li>
          <li>
            NeutronFest reserves the right to disqualify participants found to
            have provided false information.
          </li>
        </ul>
      </section>

      <section id="payments" className="mt-12">
        <h2>4. Payments</h2>
        <ul>
          <li>All fees are listed in Indian Rupees (INR) and include applicable taxes.</li>
          <li>Payments are processed securely via our payment gateway.</li>
          <li>A registration is confirmed only upon successful payment.</li>
        </ul>
      </section>

      <section id="conduct" className="mt-12">
        <h2>5. Code of Conduct</h2>
        <p>Participants must:</p>
        <ul>
          <li>Behave respectfully toward all attendees, volunteers, and staff.</li>
          <li>Not engage in plagiarism, cheating, or misconduct.</li>
          <li>
            Comply with all venue rules and applicable laws. Violations may
            result in immediate disqualification and removal without refund.
          </li>
        </ul>
      </section>

      <section id="intellectual-property" className="mt-12">
        <h2>6. Intellectual Property</h2>
        <p>
          Event content, branding, logos, and materials on neutronfest.org are
          the property of NeutronFest and may not be reproduced without written
          permission.
        </p>
      </section>

      <section id="participant-submissions" className="mt-12">
        <h2>7. Participant Submissions</h2>
        <p>
          By submitting projects or presentations, participants grant
          NeutronFest a non-exclusive right to display or publish the work for
          promotional purposes, with attribution.
        </p>
      </section>

      <section id="liability" className="mt-12">
        <h2>8. Limitation of Liability</h2>
        <p>
          NeutronFest is not liable for injury, loss, or damage incurred during
          the event beyond what is covered by applicable law. Participants
          attend at their own risk.
        </p>
      </section>

      <section id="governing-law" className="mt-12">
        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Disputes are subject
          to the jurisdiction of courts in India.
        </p>
      </section>

      <section id="changes-to-terms" className="mt-12">
        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Continued use
          of the website constitutes acceptance of updated Terms.
        </p>
      </section>

      <section
        id="cancellations-refunds"
        className="mt-12 p-8 rounded-2xl border border-white/20 bg-white/3 shadow-[0_0_30px_rgba(255,255,255,0.02)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 px-4 py-1 bg-white/10 text-[10px] font-mono tracking-widest uppercase rounded-bl-lg border-l border-b border-white/10 text-zinc-400">
          SEC-05-REFUND
        </div>
        <h2 className="mt-0! text-white! border-none pb-4">
          Cancellations & Refunds
        </h2>
        <div className="space-y-6 text-zinc-300">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
            <p className="m-0!">
              This policy applies to all registrations, ticket purchases, and
              event entries made through neutronfest.org.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Cancellation by Participant
            </h3>
            <ul className="m-0">
              <li>More than 30 days before event: 75% refund</li>
              <li>15-30 days before event: 50% refund</li>
              <li>7-14 days before event: 25% refund</li>
              <li>Less than 7 days before event: No refund</li>
            </ul>
            <p className="mt-3! mb-0!">
              To request cancellation, email{" "}
              <strong>refunds@neutronfest.org</strong> with your registration
              ID, full name, and reason for cancellation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Cancellation by NeutronFest
            </h3>
            <p>
              If NeutronFest cancels an event due to unforeseen circumstances
              (natural disaster, government order, force majeure, etc.):
            </p>
            <ul className="m-0">
              <li>
                A full refund will be issued to all registered participants.
              </li>
              <li>
                Refunds will be processed within 7-10 business days to the
                original payment method.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Event Postponement
            </h3>
            <ul className="m-0">
              <li>Your registration automatically transfers to the new date.</li>
              <li>
                If you cannot attend the new date, you may request a full
                refund within 5 days of the postponement announcement.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Refund Processing and No-Show
            </h3>
            <ul className="m-0">
              <li>Approved refunds are processed within 7-10 business days.</li>
              <li>
                Refunds are credited to the original payment method (bank
                account, UPI, or card).
              </li>
              <li>Payment gateway charges (if any) are non-refundable.</li>
              <li>
                Participants who do not attend without prior cancellation are
                not eligible for a refund.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              How to Request a Refund
            </h3>
            <ol className="m-0 pl-6">
              <li>
                1. Email <strong>refunds@neutronfest.org</strong> with subject:{" "}
                <em>Refund Request - [Your Registration ID]</em>.
              </li>
              <li>
                2. Include full name, registration ID, event name, and reason for
                cancellation.
              </li>
              <li>3. Our team will respond within 2 business days.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Disputes
            </h3>
            <p className="m-0 pl-6">
              Any disputes regarding refunds are governed by the Consumer Protection
              Act, 2019 and applicable Indian laws. Jurisdiction is in India.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="mt-12">
        <h2>Contact</h2>
        <p>
          If you have any questions regarding these Terms, please contact us.
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
