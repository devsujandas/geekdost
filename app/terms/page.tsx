export default function Terms() {
  return (
    <div className="container mx-auto py-16 px-6 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-4">
        By using our platform, you agree to the following terms and conditions. Please
        read them carefully before using the services.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of Service</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>The platform is for educational purposes only.</li>
        <li>You must not attempt to hack, exploit, or misuse the system.</li>
        <li>Content provided is for practice and self-improvement.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Accounts & Identity</h2>
      <p className="text-muted-foreground">
        We may ask for your name to personalize your experience. You are responsible
        for the accuracy of the data you provide.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
      <p className="text-muted-foreground">
        All roadmaps, quizzes, and certificates are the intellectual property of
        GeekDost. You may not reproduce or distribute them without permission.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
      <p className="text-muted-foreground">
        We are not responsible for any damages, data loss, or consequences arising from
        the use of our platform.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to Terms</h2>
      <p className="text-muted-foreground">
        We reserve the right to update these terms at any time. Continued use of the
        platform implies acceptance of the revised terms.
      </p>

      <p className="text-sm text-muted-foreground mt-10">
        Last Updated: {new Date().getFullYear()}  
        For concerns, contact: legal@geekdost.com
      </p>
    </div>
  )
}
