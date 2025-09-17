"use client"

export default function Privacy() {
  return (
    <div className="container mx-auto py-20 px-6 max-w-4xl leading-relaxed">
      {/* Header Section */}
      <div className="border-b pb-8 mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          At <strong>GeekDost</strong>, we respect your privacy and are committed to protecting
          your personal information. This Privacy Policy explains what data we collect,
          how we use it, and what rights you have as a user of our platform.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">1. Information We Collect</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>Personal data such as your name (if provided).</li>
            <li>Usage data like progress, scores, and time spent on tests.</li>
            <li>Device data such as browser type and version (collected anonymously).</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">2. How We Use Information</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <p className="text-muted-foreground mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>Track and display your exam progress and results.</li>
            <li>Improve the platform’s performance and user experience.</li>
            <li>Provide insights such as Weakness Analysis to help you improve.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">3. Data Storage</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <p className="text-muted-foreground">
            All your results and progress are stored <strong>locally</strong> in your browser
            using <code>localStorage</code>. We do not collect, transfer, or store your
            personal data on our servers.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">4. Cookies</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <p className="text-muted-foreground">
            Cookies may be used only to remember your preferences. We do not use cookies
            for advertising, third-party tracking, or profiling purposes.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">5. Your Rights</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>You may clear your results and progress at any time.</li>
            <li>You may manually delete your stored browser data.</li>
            <li>If you disagree with this policy, you may stop using the platform at any time.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t pt-6 mt-16 text-sm text-muted-foreground text-center">
        <p>Last Updated: {new Date().getFullYear()}</p>
        <p>
          For questions regarding this policy, contact us at{" "}
          <a
            href="mailto:support@geekdost.com"
            className="text-primary underline hover:text-primary/80"
          >
            support@geekdost.com
          </a>
        </p>
      </footer>
    </div>
  )
}
