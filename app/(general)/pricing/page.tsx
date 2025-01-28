import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing page',
  description: 'Esta es la página de los precios de mis servicios',
};

export default function PricingPage() {
  return (
    <p className="text-7xl">Pricing page</p>
  );
}