import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Swiss Edtech Association Logo" width={32} height={32} />
            <span className="text-xl font-semibold">Swiss Edtech Association</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#events" className="text-sm font-medium hover:underline underline-offset-4">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Swiss Edtech Association
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Advancing educational technology in Switzerland through events, funding, and collaboration.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/articles.pdf" target="_blank">
                    View Articles of Association
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
                <p className="text-muted-foreground md:text-lg">
                  The Swiss Edtech Association is dedicated to organizing and funding various educational technology
                  events throughout Switzerland. We bring together educators, technologists, and innovators to advance
                  the future of education in our country.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What We Do</h2>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-red-600" />
                    <p className="text-muted-foreground">Organize educational technology events across Switzerland</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-red-600" />
                    <p className="text-muted-foreground">Fund innovative edtech initiatives and startups</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-red-600" />
                    <p className="text-muted-foreground">Connect educators with cutting-edge technology solutions</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-red-600" />
                    <p className="text-muted-foreground">Promote Switzerland as a hub for educational innovation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Events</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  We host and support educational technology events throughout Switzerland.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-8 max-w-md mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="h-40 w-full overflow-hidden rounded-lg bg-red-100 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-red-600">Swiss Rover Challenge</h3>
                    </div>
                    <h3 className="text-xl font-bold">Swiss Rover Challenge</h3>
                    <p className="text-muted-foreground">
                      An exciting competition where students design, build, and operate rovers to complete specific
                      tasks.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="https://swissroverchallenge.com" target="_blank">
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
                <p className="text-muted-foreground md:text-lg">
                  Interested in our events or want to learn more about the Swiss Edtech Association? Get in touch with
                  us.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">info@swissedtech.org</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Website:</p>
                  <p className="text-muted-foreground">swissedtech.org</p>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Us</h2>
                <p className="text-muted-foreground md:text-lg">
                  Become a member of the Swiss Edtech Association and help shape the future of education in Switzerland.
                </p>
                <Button asChild>
                  <Link href="/articles.pdf" target="_blank">
                    View Articles of Association
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Swiss Edtech Association. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link
              href="/articles.pdf"
              target="_blank"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Articles of Association
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

