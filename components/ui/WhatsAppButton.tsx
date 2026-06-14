"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971585521251"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
      <MessageCircle size={32} className="relative z-10" />
    </a>
  );
}