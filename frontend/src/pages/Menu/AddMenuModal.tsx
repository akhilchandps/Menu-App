import { useState } from "react";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

interface Props {
  allMenus: any[];
  onClose: () => void;
  onSuccess: () => void;
}

function AddMenuModal({ allMenus, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parentId: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(`${serverURL}/menus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description || undefined,
          parentId: formData.parentId || null,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Menu created!");
        onSuccess();
        onClose();
      } else {
        toast.error(data.message || "Failed to create menu");
      }
    } catch (err) {
      toast.error("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-5"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#1a1a1a] border border-[#9A7A45] rounded-lg p-8 w-full max-w-md">

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
            ADD MENU
          </h3>
          <button onClick={onClose} className="text-[#999] hover:text-[#C8A96E] text-xl">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <label className="text-[#C8A96E] text-xs font-bold tracking-widest uppercase">
              Menu Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Drinks, Food, Brunch"
              value={formData.name}
              required
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0f0f0f] border border-[#333] rounded text-white px-4 py-3 text-sm outline-none focus:border-[#C8A96E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#C8A96E] text-xs font-bold tracking-widest uppercase">
              Description
            </label>
            <textarea
              placeholder="Brief description..."
              value={formData.description}
              rows={3}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#0f0f0f] border border-[#333] rounded text-white px-4 py-3 text-sm outline-none focus:border-[#C8A96E] resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#C8A96E] text-xs font-bold tracking-widest uppercase">
              Parent Menu (optional)
            </label>
            <select
              value={formData.parentId}
              onChange={e => setFormData({ ...formData, parentId: e.target.value })}
              className="w-full bg-[#0f0f0f] border border-[#333] rounded text-white px-4 py-3 text-sm outline-none focus:border-[#C8A96E]"
            >
              <option value="">— None (Top Level) —</option>
              {allMenus.map((m) => (
                <option key={m._id} value={m._id}>{m.name}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <button
              type="button"
              onClick={onClose}
              className="border border-[#444] text-[#999] px-6 py-2.5 rounded text-sm font-semibold hover:text-[#C8A96E] hover:border-[#9A7A45] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#C8A96E] text-black px-7 py-2.5 rounded text-sm font-bold hover:bg-[#E8D5A3] transition disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Menu"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddMenuModal;