import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>E-commerce Store</title>
        <meta name="description" content="Your online shopping destination" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
