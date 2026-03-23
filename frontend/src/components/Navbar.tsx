import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0f0f0f] border-b border-[#2a2a2a] sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        <div
          className="font-bold tracking-widest border-2 px-4 py-1 text-lg"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          <span>DEEP</span>
          <span className="text-[#e91e8c]">NET</span>
          <span>SOFT</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#home" className="text-[#999] text-xs font-semibold tracking-widest hover:text-[#C8A96E]">HOME</a></li>
          <li><a href="#menu" className="text-[#C8A96E] text-xs font-semibold tracking-widest">MENU</a></li>
          <li><a href="#contact" className="text-[#999] text-xs font-semibold tracking-widest hover:text-[#C8A96E]">CONTACT US</a></li>
        </ul>

        <button
          className="md:hidden border border-[#2a2a2a] text-white px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-[#2a2a2a] list-none">
          <li><a href="#home" className="block px-6 py-4 text-[#999] text-sm border-b border-[#2a2a2a]">HOME</a></li>
          <li><a href="#menu" className="block px-6 py-4 text-[#C8A96E] text-sm border-b border-[#2a2a2a]">MENU</a></li>
          <li><a href="#contact" className="block px-6 py-4 text-[#999] text-sm">CONTACT US</a></li>
        </ul>
      )}
    </nav>
  );

}

export default Navbar;