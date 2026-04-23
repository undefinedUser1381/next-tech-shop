import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " ثبت نام | ورود",
  description:
    "Sign page for this app Sign page for this app Sign page for this app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`antialiased w-full flex items-center min-h-screen justify-center`}>{children}</div>;
}
