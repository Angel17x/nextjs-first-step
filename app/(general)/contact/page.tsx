import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Página de contacto',
};

export default function ContactPage() {
  return (
    <p className="text-7xl">Contact page</p>
  );
}