import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://leadseeder.com"),
  title: {
    default: "LeadSeeder - Smart Networking & Lead Generation Tool",
    template: "%s | LeadSeeder",
  },
  description:
    "LeadSeeder is an innovative Chrome extension that revolutionizes networking and lead generation. Find verified business emails, connect with decision-makers, and grow your network efficiently.",
  keywords: [
    "lead generation",
    "networking tool",
    "email finder",
    "business networking",
    "sales prospecting",
    "chrome extension",
    "B2B leads",
    "email verification",
    "professional networking",
    "lead generation software",
  ],
  authors: [{ name: "LeadSeeder Team" }],
  creator: "LeadSeeder",
  publisher: "LeadSeeder",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leadseeder.com",
    title: "LeadSeeder - Smart Networking & Lead Generation Tool",
    description:
      "Transform your networking and lead generation with LeadSeeder's powerful Chrome extension. Find verified emails and connect with decision-makers effortlessly.",
    siteName: "LeadSeeder",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "LeadSeeder Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadSeeder - Smart Networking & Lead Generation Tool",
    description:
      "Transform your networking and lead generation with LeadSeeder's powerful Chrome extension.",
    images: ["/logo.png"],
    creator: "@LeadSeeder",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
