import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">YerkinOnerAcademy</div>
            <p className="text-sm mb-1">©Барлық құқықтар қорғалған</p>
            <p className="text-sm mb-1">+7 747 140 14 04</p>
            <p className="text-sm mb-1">Алматы қаласы, микрорайон Мирас, 65</p>
          </div>
          
          {/* Social Media and Links */}
          <div className="flex flex-col md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com/juzo" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/77471401404" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://t.me/juzo" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition" aria-label="Telegram">
                <FaTelegram size={24} />
              </a>
              <a href="https://tiktok.com/@juzo" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition" aria-label="TikTok">
                <FaTiktok size={24} />
              </a>
              <a href="https://youtube.com/juzo" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
            <div className="space-y-2">
              <a href="/privacy" className="block hover:text-teal-300 transition">
                Құпиялылық саясаты
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-indigo-700 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} YerkinOnerAcademy. Барлық құқықтар қорғалған.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;