import { useState } from "react";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

interface Props {
  menu: any;
  onClose: () => void;
  onSuccess: () => void;
}

function AddItemModal({ menu, onClose, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(`${serverURL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          price: parseFloat(formData.price),
          menuId: menu._id,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Item added!");
        onSuccess();
        onClose();
      } else {
        toast.error(data.message || "Failed to add item");
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
          <h3 className="text-base tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
            ADD ITEM — <span className="text-[#C8A96E]">{menu.name.toUpperCase()}</span>
          </h3>
          <button onClick={onClose} className="text-[#999] hover:text-[#C8A96E] text-xl">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <label className="text-[#C8A96E] text-xs font-bold tracking-widest uppercase">
              Item Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Espresso, Caesar Salad"
              value={formData.name}
              required
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#0f0f0f] border border-[#333] rounded text-white px-4 py-3 text-sm outline-none focus:border-[#C8A96E]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#C8A96E] text-xs font-bold tracking-widest uppercase">
              Price ($) *
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={formData.price}
              required
              onChange={e => setFormData({ ...formData, price: e.target.value })}
              className="w-full bg-[#0f0f0f] border border-[#333] rounded text-white px-4 py-3 text-sm outline-none focus:border-[#C8A96E]"
            />
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
              {loading ? "Adding..." : "Add Item"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddItemModal;