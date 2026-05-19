import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Izaaz Waskito",
  description: "Portofolio",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // FIX: Menambahkan kelas 'overflow-y-scroll' pada tag html agar lebar kontainer 
    // antara halaman pendek (Home) dan halaman panjang (About) selalu konsisten 
    // dan tidak membuat garis putus-putus melompat lagi.
    <html lang="en" className="overflow-y-scroll" suppressHydrationWarning>
      <head>
        {/* Tambahkan link Google Fonts untuk Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}