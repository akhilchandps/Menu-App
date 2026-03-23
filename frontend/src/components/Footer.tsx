function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2a2a2a]">

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-10 border-b border-[#2a2a2a]">

        <div>
          <h4 className="text-[#999] text-xs font-bold tracking-widest uppercase mb-4">
            CONNECT WITH US
          </h4>
          <p className="text-[#999] text-sm mb-2">📞 +91 940 001 3423</p>
          <p className="text-[#999] text-sm">✉ info@deepnetsoft.com</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-[#C8A96E] text-3xl">◈</p>
          <h3
            className="text-white text-lg font-bold tracking-widest"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            DEEP <span className="text-[#C8A96E]">NET</span> SOFT
          </h3>
          <div className="flex gap-3 mt-1">
            <a href="#" className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#999] text-xs hover:border-[#C8A96E] hover:text-[#C8A96E] transition">f</a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#999] text-xs hover:border-[#C8A96E] hover:text-[#C8A96E] transition">𝕏</a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#999] text-xs hover:border-[#C8A96E] hover:text-[#C8A96E] transition">in</a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#999] text-xs hover:border-[#C8A96E] hover:text-[#C8A96E] transition">▶</a>
          </div>
        </div>

        <div className="md:text-right">
          <h4 className="text-[#999] text-xs font-bold tracking-widest uppercase mb-4">
            FIND US
          </h4>
          <p className="text-[#999] text-sm mb-2">Trivandrum,Kerala</p>
          <p className="text-[#999] text-sm">AB Building</p>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 gap-2">
        <p className="text-[#999] text-xs">
          © 2026 Deepnetsoft Solutions. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-[#999]">
          <a href="#" className="hover:text-[#C8A96E] transition">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-[#C8A96E] transition">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
