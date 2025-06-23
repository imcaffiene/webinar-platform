import { ReactNode } from 'react';


import "@stream-io/video-react-sdk/dist/css/styles.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen bg-black">
      {children}
    </div>
  );
}