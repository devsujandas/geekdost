export default function Privacy() {
  return (
    <div className="container mx-auto py-16 px-6 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">
        We respect your privacy and are committed to protecting it. This Privacy Policy
        explains how we collect, use, and safeguard your personal information when you
        use our platform.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Personal data like your name (if provided).</li>
        <li>Usage data such as progress, scores, and time spent on tests.</li>
        <li>Device data like browser type and version (anonymous).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Information</h2>
      <p className="text-muted-foreground mb-4">
        We use the collected data to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Track your exam progress and results.</li>
        <li>Improve user experience.</li>
        <li>Provide insights like Weakness Analysis.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Storage</h2>
      <p className="text-muted-foreground">
        Your results and progress are stored locally in your browser using{" "}
        <code>localStorage</code>. We do not store or transfer your personal data to any server.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
      <p className="text-muted-foreground">
        We may use cookies only to remember your preferences. We do not use
        tracking cookies for ads or third-party profiling.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>You can clear your results at any time.</li>
        <li>You can delete your stored data manually.</li>
        <li>You can stop using the platform if you disagree with this policy.</li>
      </ul>

      <p className="text-sm text-muted-foreground mt-10">
        Last Updated: {new Date().getFullYear()}  
        For questions about this policy, contact us at: support@geekdost.com
      </p>
    </div>
  )
}
