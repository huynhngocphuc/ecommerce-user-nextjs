'use client';

import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.title = "E-commerce Store";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Your online shopping destination");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Your online shopping destination";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
