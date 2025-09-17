"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Terms() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-primary">
        Terms of Service
      </h1>

      <div className="grid gap-8">
        {/* Section 1 */}
        <Card>
          <CardHeader>
            <CardTitle>1. Use of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The platform is designed for educational purposes only.</li>
              <li>You must not attempt to hack, exploit, or misuse the system.</li>
              <li>Content provided is intended for practice and self-improvement.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card>
          <CardHeader>
            <CardTitle>2. Accounts & Identity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may request your name or basic details to personalize your
              experience. You are responsible for providing accurate information
              and maintaining its confidentiality.
            </p>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card>
          <CardHeader>
            <CardTitle>3. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All roadmaps, quizzes, and certificates are the intellectual
              property of <span className="font-semibold">GeekDost</span>. You
              may not reproduce, distribute, or modify them without prior
              permission.
            </p>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card>
          <CardHeader>
            <CardTitle>4. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are not responsible for damages, data loss, or consequences
              arising from the use of our platform. Use of the platform is at
              your own risk.
            </p>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card>
          <CardHeader>
            <CardTitle>5. Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to update or modify these Terms at any time.
              Continued use of the platform implies acceptance of the revised
              Terms.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center border-t pt-6 text-sm text-muted-foreground">
        <p>Last Updated: {new Date().getFullYear()}</p>
        <p>
          For concerns or inquiries, contact:{" "}
          <a
            href="mailto:legal@geekdost.com"
            className="text-primary underline hover:text-primary/80"
          >
            legal@geekdost.com
          </a>
        </p>
      </footer>
    </div>
  )
}
