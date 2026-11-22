import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';
export const metadata: Metadata = {
  title: 'United Energy | Product Migration Incident Briefing',
  description: 'Executive recovery briefing for the Kraken Client Delivery Lead case study.'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>;
}
