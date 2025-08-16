"use client";
import React from "react";

export default class QuietBoundary extends React.Component<
  { fallback?: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: unknown, info: unknown) {
    console.error("QuietBoundary caught:", err, info);
  }
  render() { return this.state.hasError ? (this.props.fallback ?? null) : this.props.children; }
}
