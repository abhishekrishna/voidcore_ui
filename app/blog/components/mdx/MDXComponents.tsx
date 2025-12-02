"use client";

import type { ComponentPropsWithoutRef, JSX, ReactNode } from "react";

// Generic type helper for MDX elements
type MDXElementProps<T extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<T> & { children?: ReactNode };

const MDXComponents = {
  h2: (props: MDXElementProps<"h2">) => (
    <h2
      className="text-3xl font-semibold mt-8 mb-4"
      {...props}
    />
  ),

  h3: (props: MDXElementProps<"h3">) => (
    <h3
      className="text-2xl font-semibold mt-6 mb-3"
      {...props}
    />
  ),

  p: (props: MDXElementProps<"p">) => (
    <p
      className="leading-7 text-white/80 my-4"
      {...props}
    />
  ),

  ul: (props: MDXElementProps<"ul">) => (
    <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
  ),

  li: (props: MDXElementProps<"li">) => (
    <li className="leading-7" {...props} />
  ),

  code: (props: MDXElementProps<"code">) => (
    <code
      className="px-2 py-1 rounded bg-white/10 text-pink-300 text-sm"
      {...props}
    />
  ),

  pre: (props: MDXElementProps<"pre">) => (
    <pre
      className="bg-[#0b0c15] border border-white/10 p-4 rounded-lg overflow-x-auto my-6"
      {...props}
    />
  ),
};

export default MDXComponents;