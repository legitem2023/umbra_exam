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
      <body className={inter.className}>
      <div className="ripple-container">
  <div className="ripple"></div>
  <div className="ripple"></div>
  <div className="ripple"></div>
  <div className="ripple"></div>
  <div className="ripple"></div>
  
</div>        <ToastContainer/>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}