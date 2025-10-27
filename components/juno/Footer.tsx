import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and branding */}
          <div className="flex items-center gap-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fec447674f236f16331c30/a2e7daa5a_Junonobackgroundpng.png" 
              alt="Juno" 
              className="w-12 h-12"
            />
            <div>
              <p className="text-[#0A4733] font-bold text-lg">Juno</p>
              <p className="text-gray-500 text-sm">SOC 2 compliance made simple</p>
            </div>
          </div>

          {/* Copyright and social links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2025 Juno. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00986E] text-[#0A4733] hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@usejuno.co"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#00986E] text-[#0A4733] hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
