"use client";

import type React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Space_Grotesk } from "next/font/google";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const AdvancedGalaxyCanvas = dynamic(
  () => import("./advanced-galaxy-canvas"),
  { ssr: false, loading: () => null }
);

const FORM_ENDPOINT = "https://formspree.io/f/mjkozkel";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
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
          message: formData.message,
        }),
      });

      if (res.ok) {
        setOk(true);
        setFormData({ name: "", contact: "", message: "", _honeypot: "" });
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
    <section id="contact" className="relative z-10 snap-start min-h-screen px-4 py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16" variant="soft">
          <h2 className={`cosmic-heading ${display.className} text-4xl md:text-5xl font-bold text-gray-100 mb-6`}>
            Let’s Connect Across the <span className="cosmic-gradient">Stars</span>
          </h2>
          <p className="text-xl text-gray-200 mb-3">
            Open to work opportunities, research & projects, product ideas, collaborations,
            or simply a good conversation.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
  
          <ScrollReveal className="relative" variant="up">
            <AdvancedGalaxyCanvas />
          </ScrollReveal>

          <ScrollReveal variant="up" delayMs={80}>
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send a Signal to My Universe ✨
              </CardTitle>
              <p className="text-gray-300 text-sm leading-relaxed">
                Have an idea, a question, or just want to connect?
                <br />
                Drop a signal — I read every one.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                    <p className="mt-1 text-xs text-slate-400">How should I call you?</p>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact" className="text-white">Contact</Label>
                    <p className="mt-1 text-xs text-slate-400">Email / LinkedIn / WeChat</p>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Email / LinkedIn / WeChat"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <p className="mt-1 text-xs text-slate-400">What are you building, exploring, or curious about?</p>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[140px]"
                    placeholder="Share context, links, or a rough idea — anything is welcome."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl border border-sky-400/40 bg-transparent text-sky-100 shadow-none hover:bg-sky-500/10 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? "Sending..." : "Send Signal"}
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

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-center text-xs text-gray-400">
                "Every message is a star launched into our shared sky — it will find its place in my constellation."
                </p>
              </div>
            </CardContent>
          </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
