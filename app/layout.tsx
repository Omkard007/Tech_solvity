import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tech_solvity — Making Construction Operations Visible',
  description:
    'A team tackling the visibility challenges facing small construction contractors. Join our innovation challenge.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
