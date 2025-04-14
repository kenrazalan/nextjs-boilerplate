import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Build Something Amazing
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              A modern Next.js boilerplate with TypeScript, Tailwind CSS, and
              all the tools you need to build your next project.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Everything you need to build modern web apps
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to get started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of developers building amazing applications with our
            boilerplate.
          </p>
          <Button variant="secondary" size="lg">
            Start Building Now
          </Button>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Modern Stack",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS for the best developer experience.",
  },
  {
    title: "Type Safety",
    description:
      "Full TypeScript support with strict type checking and excellent IDE integration.",
  },
  {
    title: "Performance",
    description:
      "Optimized for speed with automatic code splitting and server-side rendering.",
  },
];
