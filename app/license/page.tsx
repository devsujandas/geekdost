"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function License() {
  return (
    <div className="container mx-auto py-16 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-primary">
        GeekDost Custom License
      </h1>
      <p className="text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
        This document outlines the terms and conditions governing the use of the{" "}
        <strong>GeekDost User Interface (UI)</strong>. By accessing or using
        this project, you agree to comply with the terms of this license.
      </p>

      <div className="grid gap-8">
        {/* Section 1 */}
        <Card>
          <CardHeader>
            <CardTitle>1. Permitted Uses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Use of the <strong>UI design and layout</strong> in personal or
                commercial projects.
              </li>
              <li>
                Customization of <strong>colors, fonts, and design components</strong>.
              </li>
              <li>
                Integration of the UI in <strong>academic, client, or in-house</strong>{" "}
                projects.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card>
          <CardHeader>
            <CardTitle>2. Restricted Uses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                You may <strong>not</strong> copy, redistribute, or repurpose{" "}
                <strong>
                  questions, quizzes, answers, explanations, datasets, or images
                </strong>
                .
              </li>
              <li>
                You may <strong>not</strong> claim ownership of the provided
                educational content.
              </li>
              <li>
                You may <strong>not</strong> sell, sublicense, or distribute
                original datasets or media assets.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card>
          <CardHeader>
            <CardTitle>3. Attribution Requirement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you adapt or reuse the <strong>UI design</strong>, the following
              attribution must be maintained:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Visible credit to <strong>GeekDost</strong> in the form of “UI
                Design inspired by GeekDost”.
              </li>
              <li>
                Attribution must appear in the{" "}
                <strong>README, About section, or Footer</strong>.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 4 */}
        <Card>
          <CardHeader>
            <CardTitle>4. Modification Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You may modify the UI for personal or organizational needs.</li>
              <li>
                Shared or redistributed modifications{" "}
                <strong>must retain proper credit</strong>.
              </li>
              <li>
                The original copyright
                <strong> must remain intact</strong>.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 5 */}
        <Card>
          <CardHeader>
            <CardTitle>5. Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The UI is provided <strong>“as is”</strong>, without warranties of
              any kind—express or implied. GeekDost is not responsible for direct,
              indirect, or incidental damages resulting from the use or misuse of
              this UI.
            </p>
          </CardContent>
        </Card>

        {/* Section 6 */}
        <Card>
          <CardHeader>
            <CardTitle>6. Enforcement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Unauthorized use of{" "}
              <strong>educational content, datasets, or media assets</strong>{" "}
              beyond what is permitted in this license constitutes a violation and
              may lead to legal enforcement or other remedies.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center border-t pt-6 text-sm text-muted-foreground">
        <p>Last Updated: {new Date().getFullYear()}</p>
        <p>
          For licensing inquiries, contact:{" "}
          <a
            href="mailto:license@geekdost.com"
            className="text-primary underline hover:text-primary/80"
          >
            license@geekdost.com
          </a>
        </p>
      </footer>
    </div>
  )
}
