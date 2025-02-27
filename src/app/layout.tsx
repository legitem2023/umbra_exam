import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from './components/ReduxProvider/ReduxProvider';
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'A simple task management app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={inter.className}>
        <ToastContainer/>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
