// import { Footer } from '@/components/footer';
// import { Header } from '@/components/header';
// import { RenderMounted } from '@/components/render-mounted';
// import { ADMIN } from '@/constants/contants';
// import { createClient } from '@/supabase/server';
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {}
