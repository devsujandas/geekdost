export default function Terms() {
  return (
    <div className="container mx-auto py-16 px-6 leading-relaxed">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-6 text-primary">
        Terms of Service
      </h1>
      <p className="text-muted-foreground mb-6">
        Welcome to our platform. By accessing or using our services, you agree
        to be bound by these Terms of Service. Please read them carefully before
        proceeding.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">1. Use of Service</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>The platform is provided strictly for educational and learning purposes.</li>
        <li>You agree not to hack, exploit, or misuse the system in any way.</li>
        <li>Content offered is for practice, skill-building, and self-improvement only.</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">2. Accounts & Identity</h2>
      <p className="text-muted-foreground">
        We may collect your name or basic details to personalize your
        experience. You are solely responsible for ensuring the accuracy of
        information you provide and for maintaining its confidentiality.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">3. Intellectual Property</h2>
      <p className="text-muted-foreground">
        All roadmaps, quizzes, certificates, and related materials are the
        intellectual property of <span className="font-semibold">GeekDost</span>.
        Unauthorized reproduction, redistribution, or modification is strictly
        prohibited without prior written consent.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">4. Limitation of Liability</h2>
      <p className="text-muted-foreground">
        We are not liable for any damages, data loss, interruptions, or
        consequences resulting from the use or inability to use our platform.
        Use of the platform is at your own risk.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-bold mt-10 mb-4">5. Changes to Terms</h2>
      <p className="text-muted-foreground">
        We reserve the right to update or revise these Terms at any time. Your
        continued use of the platform after changes indicates acceptance of the
        updated terms.
      </p>

      {/* Footer Note */}
      <p className="text-sm text-muted-foreground mt-12 border-t pt-6">
        Last Updated: {new Date().getFullYear()} <br />
        For legal inquiries, contact us at:{" "}
        <a
          href="mailto:legal@geekdost.com"
          className="text-primary underline hover:text-primary/80"
        >
          legal@geekdost.com
        </a>
      </p>
    </div>
  )
}
