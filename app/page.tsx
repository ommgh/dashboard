"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Package,
  BarChart3,
  Layers,
  Globe,
  ShoppingCart,
} from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const imageSrc =
    resolvedTheme === "dark"
      ? "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1743981475/Screenshot_07-Apr_04-46-21_zen_lpxbqk.png"
      : "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1743981475/Screenshot_07-Apr_04-46-37_zen_skieh3.png";
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center font-bold text-xl">
            <span>NEXMCF</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#integrations"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Integrations
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              prefetch
              className="hidden md:block text-sm font-medium transition-colors hover:text-primary"
            >
              Login
            </Link>
            <Button onClick={() => router.push("/auth/register")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unify E-commerce Fulfillment with Amazon MCF
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Seamlessly integrate Shopify,Ebay and custom websites
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="group text-white"
                    onClick={() => router.push("/auth/register")}
                  >
                    Start Your E-Commerce Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full lg:h-[330px] h-[215px] overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
                  <Image
                    src={imageSrc}
                    alt="NEXMCF Dashboard"
                    width={600}
                    height={600}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/30 blur-xl" />
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-xl" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need for Multi-Channel Fulfillment
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Globe,
                  title: "Multi-Channel Integration",
                  description:
                    "Connect Shopify, Ebay, and custom websites to Amazon MCF with a single integration.",
                },
                {
                  icon: BarChart3,
                  title: "Centralized Dashboard",
                  description:
                    "Manage all your orders, inventory, and fulfillment from one intuitive dashboard.",
                },
                {
                  icon: ShoppingCart,
                  title: "Automated Order Routing",
                  description:
                    "Automatically route orders to Amazon MCF based on your custom business rules.",
                },
                {
                  icon: Package,
                  title: "Real-time Tracking",
                  description:
                    "Provide customers with real-time tracking information across all sales channels.",
                },
                {
                  icon: Layers,
                  title: "Inventory Sync",
                  description:
                    "Keep your inventory levels synchronized across all platforms in real-time.",
                },
                {
                  icon: CheckCircle,
                  title: "Simplified Returns",
                  description:
                    "Manage returns and exchanges seamlessly across all your sales channels.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simplified Fulfillment in Three Steps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get up and running with NEXMCF in minutes, not weeks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Connect Your Stores",
                  description:
                    "Integrate your Shopify, Ebay, or custom website with our simple one-click connectors.",
                },
                {
                  step: "02",
                  title: "Configure Your Rules",
                  description:
                    "Set up your fulfillment rules based on product type, destination, or other custom criteria.",
                },
                {
                  step: "03",
                  title: "Start Fulfilling",
                  description:
                    "Watch as orders automatically flow to Amazon MCF and get fulfilled with Prime-like speed.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div className="mt-6 space-y-2 text-center">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-10 left-full w-12 h-0.5 bg-border">
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business. All plans
                  include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  description:
                    "Perfect for small businesses just getting started with multi-channel fulfillment.",
                  features: [
                    "Up to 500 orders per month",
                    "2 sales channels",
                    "Basic reporting",
                    "Email support",
                    "Standard integrations",
                  ],
                },
                {
                  name: "Growth",
                  price: "$299",
                  description:
                    "Ideal for growing businesses with multiple sales channels.",
                  features: [
                    "Up to 2,000 orders per month",
                    "5 sales channels",
                    "Advanced reporting",
                    "Priority support",
                    "All integrations",
                    "Custom rules engine",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description:
                    "For large businesses with complex fulfillment needs.",
                  features: [
                    "Unlimited orders",
                    "Unlimited sales channels",
                    "Custom reporting",
                    "Dedicated account manager",
                    "Custom integrations",
                    "API access",
                    "SLA guarantees",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg border ${
                    plan.popular ? "border-primary" : "border-border"
                  } bg-background p-6 shadow-sm`}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="ml-1 text-muted-foreground">
                          /month
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? ""
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Custom"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Streamline Your E-commerce Fulfillment?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of businesses that trust NEXMCF for their
                multi-channel fulfillment needs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => router.push("/auth/register")}
                >
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-12 md:py-16 lg:flex-row lg:justify-between lg:py-20">
          <div className="flex flex-col gap-6 lg:max-w-sm">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Package className="h-6 w-6 text-primary" />
              <span>NEXMCF</span>
            </div>
            <p className="text-sm text-muted-foreground">
              NEXMCF is the leading solution for integrating multiple sales
              channels with Amazon Multi-Channel Fulfillment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                {["Features", "Integrations", "Pricing", "FAQ", "Roadmap"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                {["About", "Blog", "Careers", "Press", "Partners"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                {["Documentation", "Guides", "Support", "API", "Community"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                {["Terms", "Privacy", "Cookies", "Licenses", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} NEXMCF. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
