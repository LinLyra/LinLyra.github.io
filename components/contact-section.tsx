// components/contact-section.tsx
"use client";

import type React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const AdvancedGalaxyCanvas = dynamic(
  () => import("./advanced-galaxy-canvas"),
  { ssr: false, loading: () => null }
);

const FORM_ENDPOINT = "https://formspree.io/f/mjkozkel";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
    _honeypot: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honeypot) return;

    setSubmitting(true);
    setOk(null);
    setErrMsg(null);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setOk(true);
        setFormData({ name: "", contact: "", subject: "", message: "", _honeypot: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setOk(false);
        setErrMsg(data?.errors?.[0]?.message || "Submit failed. Please try again.");
      }
    } catch {
      setOk(false);
      setErrMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen px-4 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Let’s Connect Across the Stars
          </h2>
          <p className="text-xl text-gray-200 mb-3">
            Open to work opportunities, research & projects, product ideas, collaborations,
            or simply a good conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
  
          <AdvancedGalaxyCanvas />

          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send a Message to My Universe
              </CardTitle>
              <p className="text-gray-300 text-sm">
                Work, research, projects, community ideas — or just a hello. All signals are welcome.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact" className="text-white">Contact</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="email / WeChat / LinkedIn"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Topic (work / research / idea / hello)"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Tell me what you’re exploring, building, or curious about — links welcome."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                {ok === true && (
                  <p className="text-center text-emerald-300 text-sm">
                    Message sent. Thanks for your signal ✨
                  </p>
                )}
                {ok === false && (
                  <p className="text-center text-red-300 text-sm">
                    {errMsg || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400 text-xs text-center italic">
                  "Every message is a star launched into our shared sky — it will find its place in my constellation."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
