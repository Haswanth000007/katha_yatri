import type { Metadata } from "next";
import "../styles/globals.css";
import TopBar from "@/components/Common/NavigationDrawer/TopBar";

export const metadata: Metadata = {
  title: "Katha Yathri",
  description: "A Travelling platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <TopBar />
        {/* Add padding-top equal to your TopBar height (48px in this case) */}
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}