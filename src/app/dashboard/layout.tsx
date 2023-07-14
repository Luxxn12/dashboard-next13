"use client";
import DashboardLayout from "@/layout/dashboard_Layout";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
