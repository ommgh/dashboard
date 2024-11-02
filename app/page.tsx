"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileText, Zap, Lock } from "lucide-react";
import { LoginButton } from "@/components/auth/login-button";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">O.R.I.O.N</div>
          <LoginButton>
            <Button variant="outline">Login</Button>
          </LoginButton>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6">
            Welcome to O.R.I.O.N
          </h1>
          <p className="text-xl text-center text-gray-600 mb-4">
            Organizational Resource & Information Optimizing Nexus
          </p>
          <p className="text-lg text-center text-gray-600 mb-12">
            Streamline your work, get instant answers, and boost productivity
            with our intelligent AI system.
          </p>
          <div className="flex justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description: "Get intelligent responses to your queries",
              },
              {
                icon: FileText,
                title: "Document Analysis",
                description: "Upload and analyze documents effortlessly",
              },
              {
                icon: Zap,
                title: "Boost Productivity",
                description: "Streamline your workflow and save time",
              },
              {
                icon: Lock,
                title: "Secure & Confidential",
                description: "Your data is protected and private",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 O.R.I.O.N. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-600 hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-600 hover:underline mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-blue-600 hover:underline mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
