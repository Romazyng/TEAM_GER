import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team GER",
  openGraph: {
      title: "Team GER",
    description:
      "Team GER",
  },
  twitter: {
    card: "summary_large_image",
      title: "Team GER",
    description:
      "Team GER",
    creator: "@tmeyer_me",
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
