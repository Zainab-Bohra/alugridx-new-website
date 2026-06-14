"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// FIX: इम्पोर्ट पाथ को आपके असली फ़ाइल नाम "ProductDetailClient" के केस से पूरी तरह मैच कर दिया गया है
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`);
        if (!res.ok) throw new Error("Product data reference failure");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#DDF4E7] flex items-center justify-center text-[#124170] font-mono text-xs font-bold uppercase tracking-widest">
        [ Connecting with Server Nodes... ]
      </div>
    );
  }

  return <ProductDetailClient />;
}