import type * as React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string
        autoplay?: boolean
        loop?: boolean
        renderer?: "svg" | "canvas" | "html"
        background?: string
      }
    }
  }
}

export {}
