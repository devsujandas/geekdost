"use client"

export default function License() {
  return (
    <div className="container mx-auto py-20 px-6 max-w-4xl">
      {/* Header Section */}
      <div className="border-b pb-8 mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
          GeekDost Custom License
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          This document outlines the terms and conditions governing the use of the{" "}
          <strong>GeekDost User Interface (UI)</strong>. By accessing or using this project,
          you agree to comply with the terms of this license.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">1. Permitted Uses</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>Use of the <strong>UI design and layout</strong> in personal or commercial projects.</li>
            <li>Customization of <strong>colors, fonts, and design components</strong> as needed.</li>
            <li>Integration of the UI in <strong>academic, client, or in-house</strong> projects.</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">2. Restricted Uses</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>
              You may <strong>not</strong> copy, redistribute, or repurpose{" "}
              <strong>questions, quizzes, answers, explanations, datasets, or images</strong>.
            </li>
            <li>You may <strong>not</strong> claim ownership of the provided educational content.</li>
            <li>You may <strong>not</strong> sell, sublicense, or distribute original datasets or media assets.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">3. Attribution Requirement</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <p className="text-muted-foreground mb-4">
            If you adapt or reuse the <strong>UI design</strong>, the following attribution
            must be maintained:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>Visible credit to <strong>GeekDost</strong> in the form of “UI Design inspired by GeekDost”.</li>
            <li>Attribution must appear in the <strong>README, About section, or Footer</strong>.</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">4. Modification Rules</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
            <li>You may modify the UI for personal or organizational needs.</li>
            <li>Shared or redistributed modifications <strong>must retain proper credit</strong>.</li>
            <li>The original copyright
              <strong> must remain intact</strong> under all circumstances.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">5. Disclaimer</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <p className="text-muted-foreground">
            The UI is provided <strong>“as is”</strong>, without warranties of any kind—express or
            implied. GeekDost is not responsible for direct, indirect, or incidental damages
            resulting from the use or misuse of this UI.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">6. Enforcement</h2>
        <div className="bg-muted/40 rounded-xl p-6">
          <p className="text-muted-foreground">
            Unauthorized use of <strong>educational content, datasets, or media assets</strong>
            beyond what is permitted in this license constitutes a violation and may lead to
            legal enforcement or other remedies.
          </p>
        </div>
      </section>

      {/* Footer Note */}
<footer className="border-t pt-6 mt-16 text-sm text-muted-foreground text-center">
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
