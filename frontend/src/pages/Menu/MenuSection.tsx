import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { serverURL } from "../../services/serverURL";
import AddMenuModal from "./AddMenuModal";
import AddItemModal from "./AddItemModal";

function MenuSection() {
  const [allMenus, setAllMenus]           = useState<any[]>([]);
  const [rootMenus, setRootMenus]         = useState<any[]>([]);
  const [activeMenu, setActiveMenu]       = useState<any>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<any>(null);
  const [subMenus, setSubMenus]           = useState<any[]>([]);
  const [items, setItems]                 = useState<any[]>([]);
  const [loading, setLoading]             = useState(true);
  const [showAddMenu, setShowAddMenu]     = useState(false);
  const [showAddItem, setShowAddItem]     = useState(false);

  const loadMenuData = async (menu: any) => {
    try {
      const res = await fetch(`${serverURL}/menus/${menu._id}`);
      const data = await res.json();
      if (res.ok) {
        setSubMenus(data.subMenus || []);
        setItems(data.items || []);
      }
    } catch (err) {
      setSubMenus([]);
      setItems([]);
    }
  };

  const fetchMenus = async () => {
    try {
      const res = await fetch(`${serverURL}/menus`);
      const data = await res.json();

      if (res.ok) {
        const all = Array.isArray(data) ? data : [];
        setAllMenus(all);
        const roots = all.filter((m: any) => !m.parentId);
        setRootMenus(roots);
        if (roots.length > 0) {
          setActiveMenu(roots[0]);
          await loadMenuData(roots[0]);
        }
      } else {
        toast.error("Failed to load menus");
      }
    } catch (err) {
      toast.error("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
  },[]);

  const handleTabClick = async (menu: any) => {
    setActiveMenu(menu);
    setActiveSubMenu(null);
    await loadMenuData(menu);
  };

  const handleSubMenuClick = async (menu: any) => {
    setActiveSubMenu(menu);
    await loadMenuData(menu);
  };

  const handleBackToParent = async () => {
    if (activeMenu) {
      setActiveSubMenu(null);
      await loadMenuData(activeMenu);
    }
  };

  const currentMenu = activeSubMenu || activeMenu;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] gap-4 text-[#999]">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#C8A96E] border-r-transparent" />
        <p>Loading Menu...</p>
      </div>
    );
  }

  return (
    <section>

      <div className="flex items-center justify-center flex-wrap gap-3 px-6 py-4 bg-[#0f0f0f] border-b border-[#2a2a2a]">
        <div className="flex flex-wrap">
          {rootMenus.map((menu) => (
            <button
              key={menu._id}
              onClick={() => handleTabClick(menu)}
              className={`px-9 py-3 text-xs font-bold tracking-widest border transition
                ${activeMenu?._id === menu._id && !activeSubMenu
                  ? "bg-[#C8A96E] text-black border-[#C8A96E]"
                  : "bg-transparent text-[#999] border-[#2a2a2a] hover:text-[#C8A96E] hover:border-[#9A7A45]"
                }`}
            >
              {menu.name.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAddMenu(true)}
          className="border border-[#9A7A45] text-[#C8A96E] px-5 py-2.5 text-xs font-bold tracking-widest hover:bg-[#C8A96E] hover:text-black transition rounded-sm"
        >
          + ADD MENU
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_180px] min-h-[440px] bg-[#141414] border-l-4 border-r-4 border-[#4CAF50]">

        <div className="hidden md:block overflow-hidden opacity-35">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&q=80"
            alt="food" className="w-full h-full object-cover" />
        </div>

        <div className="p-8 md:p-10">

          {activeSubMenu && (
            <div className="flex items-center gap-2 mb-5 text-sm">
              <button
                onClick={handleBackToParent}
                className="text-[#C8A96E] font-semibold hover:opacity-70"
              >
                ← {activeMenu?.name}
              </button>
              <span className="text-[#999]">›</span>
              <span className="text-white font-semibold">{activeSubMenu.name}</span>
            </div>
          )}

          {subMenus.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-7">
              {subMenus.map((sub) => (
                <button
                  key={sub._id}
                  onClick={() => handleSubMenuClick(sub)}
                  className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase border transition
                    ${activeSubMenu?._id === sub._id
                      ? "bg-[#9A7A45] text-black border-[#9A7A45]"
                      : "bg-transparent text-[#999] border-[#2a2a2a] hover:border-[#9A7A45] hover:text-[#C8A96E]"
                    }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}

          {currentMenu ? (
            <div>
              <div className="mb-6">
                <h2 className="font-bold text-4xl tracking-[5px] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}>
                  {currentMenu.name.toUpperCase()}
                </h2>
                {currentMenu.description && (
                  <p className="text-[#999] text-sm italic">{currentMenu.description}</p>
                )}
              </div>

              {items.length === 0 && subMenus.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[180px] gap-4 text-center">
                  <p className="text-[#999]">
                    No items in <strong className="text-[#C8A96E]">{currentMenu.name}</strong> yet
                  </p>
                  <button
                    onClick={() => setShowAddItem(true)}
                    className="bg-[#C8A96E] text-black px-7 py-3 text-sm font-bold tracking-widest hover:bg-[#E8D5A3] transition rounded-sm"
                  >
                    + Add First Item
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-1 mb-6">
                    {items.map((item, idx) => (
                      <div
                        key={item._id}
                        className={`flex items-center px-3 py-2.5 rounded-sm hover:bg-white/5 transition
                          ${idx === 0 ? "border border-[#4CAF50] bg-[#4CAF50]/5" : ""}`}
                      >
                        <span className="text-xs font-bold tracking-widest text-white shrink-0">
                          {item.name.toUpperCase()}
                        </span>
                        <span className="flex-1 border-b-2 border-dotted border-[#3a3a3a] mx-3 mb-0.5" />
                        <span className="text-xs font-bold text-white shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowAddItem(true)}
                    className="border border-[#9A7A45] text-[#C8A96E] px-6 py-2.5 text-xs font-bold tracking-widest hover:bg-[#C8A96E] hover:text-black transition rounded-sm"
                  >
                    + ADD ITEM
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[200px] gap-4 text-center">
              <p className="text-[#999]">No menus yet</p>
              <button
                onClick={() => setShowAddMenu(true)}
                className="bg-[#C8A96E] text-black px-7 py-3 text-sm font-bold tracking-widest hover:bg-[#E8D5A3] transition rounded-sm"
              >
                + Create First Menu
              </button>
            </div>
          )}
        </div>

        <div className="hidden md:block overflow-hidden opacity-35">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80"
            alt="food" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 md:px-12 py-8 bg-[#1a1a1a] border-t border-[#2a2a2a]">
        <div>
          <p className="text-[#999] text-sm italic mb-1">Be there on time.</p>
          <h3 className="text-2xl font-bold tracking-widest"
            style={{ fontFamily: "'Cinzel', serif" }}>
            OPENING HOURS
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {[
            { day: "MONDAY - THURSDAY", time: "12 PM – 12 AM" },
            { day: "FRIDAY - SATURDAY", time: "12 PM – 01 AM" },
            { day: "SUNDAY",            time: "12 PM – 11 PM" },
          ].map((slot, i) => (
            <div key={i} className="text-center">
              <p className="text-[#999] text-xs font-semibold tracking-widest uppercase mb-2">{slot.day}</p>
              <span className="text-[#C8A96E] text-base font-bold tracking-wider">{slot.time}</span>
            </div>
          ))}
        </div>
      </div>

      {showAddMenu && (
        <AddMenuModal
          allMenus={allMenus}
          onClose={() => setShowAddMenu(false)}
          onSuccess={fetchMenus}
        />
      )}

      {showAddItem && currentMenu && (
        <AddItemModal
          menu={currentMenu}
          onClose={() => setShowAddItem(false)}
          onSuccess={() => loadMenuData(currentMenu)}
        />
      )}

    </section>
  );
}

export default MenuSection;