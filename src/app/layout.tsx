import { Layout } from "@/components/layout/Layout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        {/* {children} */}
      </body>
    </html>
  );
}
