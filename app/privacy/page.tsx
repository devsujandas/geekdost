"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Privacy() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-primary">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
        At <strong>GeekDost</strong>, we respect your privacy and are committed to
        protecting your personal information. This Privacy Policy explains what
        data we collect, how we use it, and the rights you have as a user of our
        platform.
      </p>

      <div className="grid gap-8">
        {/* Section 1 */}
        <Card>
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Personal data such as your name (if provided).</li>
              <li>Usage data like progress, scores, and time spent on tests.</li>
              <li>Device data such as browser type and version (anonymous).</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card>
          <CardHeader>
            <CardTitle>2. How We Use Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Track and display your exam progress and results.</li>
              <li>Improve the platform’s performance and user experience.</li>
              <li>Provide insights such as Weakness Analysis.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card>
          <CardHeader>
            <CardTitle>3. Data Storage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All your results and progress are stored{" "}
              <strong>locally</strong> in your browser using{" "}
              <code>localStorage</code>. We do not collect, transfer, or store
              your personal data on our servers.
            </p>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card>
          <CardHeader>
            <CardTitle>4. Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Cookies may be used only to remember your preferences. We do not
              use cookies for advertising, third-party tracking, or profiling.
            </p>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card>
          <CardHeader>
            <CardTitle>5. Your Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You may clear your results and progress at any time.</li>
              <li>You may manually delete your stored browser data.</li>
              <li>
                If you disagree with this policy, you may stop using the
                platform at any time.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center border-t pt-6 text-sm text-muted-foreground">
        <p>Last Updated: {new Date().getFullYear()}</p>
        <p>
          For questions about this policy, contact:{" "}
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
