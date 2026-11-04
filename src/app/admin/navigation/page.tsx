"use client";

import React, { useEffect, useState } from "react";
import { Navigation, Plus, Edit2, Trash2, ShieldCheck, ChevronDown, ChevronRight, CornerDownRight, MoveUp, MoveDown } from "lucide-react";
import { NavigationItemCMS } from "@/dashboard/types";
import { fetchCMS, saveCMS } from "@/dashboard/services/cms";
import Modal from "@/dashboard/components/Modal";
import ConfirmModal from "@/dashboard/components/ConfirmModal";

export default function AdminNavigationPage() {
  const [navItems, setNavItems] = useState<NavigationItemCMS[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Parent Item Modal
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NavigationItemCMS | null>(null);
  const [itemForm, setItemForm] = useState<{ label: string; href: string; highlight: boolean }>({
    label: "",
    href: "",
    highlight: false,
  });

  // Submenu Item Modal
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [parentForSub, setParentForSub] = useState<NavigationItemCMS | null>(null);
  const [editingSubId, setEditingSubId] = useState<string | null>(null);
  const [subForm, setSubForm] = useState<{ label: string; href: string; description: string }>({
    label: "",
    href: "",
    description: "",
  });

  // Delete Modals
  const [itemToDelete, setItemToDelete] = useState<NavigationItemCMS | null>(null);
  const [subToDelete, setSubToDelete] = useState<{ parentId: string; subId: string; label: string } | null>(null);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchCMS<NavigationItemCMS[]>("navigation");
    if (data) setNavItems(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const persistNavigation = async (updated: NavigationItemCMS[], msg: string) => {
    setSaving(true);
    const success = await saveCMS("navigation", updated);
    setSaving(false);
    if (success) {
      setNavItems(updated);
      setToast(msg);
      setTimeout(() => setToast(null), 3000);
    } else {
      alert("Failed to save navigation.");
    }
  };

  // Move Item Up/Down
  const moveItem = (index: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= navItems.length) return;

    const copy = [...navItems];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;

    persistNavigation(copy, "Navigation order updated!");
  };

  // Add / Edit Parent Item
  const handleItemSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let updated: NavigationItemCMS[];

    if (editingItem) {
      updated = navItems.map((item) =>
        item.id === editingItem.id
          ? { ...item, label: itemForm.label, href: itemForm.href, highlight: itemForm.highlight }
          : item
      );
    } else {
      const newItem: NavigationItemCMS = {
        id: `nav-${Date.now()}`,
        label: itemForm.label,
        href: itemForm.href,
        highlight: itemForm.highlight,
        order: navItems.length + 1,
        children: [],
      };
      updated = [...navItems, newItem];
    }

    setIsItemModalOpen(false);
    persistNavigation(updated, editingItem ? "Menu item updated!" : "New menu item added!");
  };

  // Add / Edit Submenu Item
  const handleSubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentForSub) return;

    const updated = navItems.map((parent) => {
      if (parent.id !== parentForSub.id) return parent;

      let children = parent.children ? [...parent.children] : [];

      if (editingSubId) {
        children = children.map((c) =>
          c.id === editingSubId
            ? { ...c, label: subForm.label, href: subForm.href, description: subForm.description }
            : c
        );
      } else {
        children.push({
          id: `sub-${Date.now()}`,
          label: subForm.label,
          href: subForm.href,
          description: subForm.description,
        });
      }

      return { ...parent, children };
    });

    setIsSubModalOpen(false);
    persistNavigation(updated, editingSubId ? "Submenu item updated!" : "Submenu item added!");
  };

  // Delete Parent
  const confirmDeleteItem = () => {
    if (!itemToDelete) return;
    const updated = navItems.filter((i) => i.id !== itemToDelete.id);
    setItemToDelete(null);
    persistNavigation(updated, "Menu item removed!");
  };

  // Delete Submenu Item
  const confirmDeleteSub = () => {
    if (!subToDelete) return;
    const updated = navItems.map((parent) => {
      if (parent.id !== subToDelete.parentId) return parent;
      return {
        ...parent,
        children: (parent.children || []).filter((c) => c.id !== subToDelete.subId),
      };
    });
    setSubToDelete(null);
    persistNavigation(updated, "Submenu item removed!");
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold shadow-lg shadow-emerald-500/20 text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Navigation className="w-6 h-6 text-amber-400" />
            <span>Navigation & Header Menu Management</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure header navigation items, dropdown submenus (e.g., Case Studies under Company), links, and ordering.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingItem(null);
            setItemForm({ label: "", href: "", highlight: false });
            setIsItemModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-primary-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Add Menu Item</span>
        </button>
      </div>

      {/* Navigation Tree */}
      <div className="space-y-3">
        {loading ? (
          <div className="p-8 text-center text-xs text-slate-500">Loading navigation structure...</div>
        ) : navItems.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-2xl">
            No navigation items configured. Click "Add Menu Item" above to get started.
          </div>
        ) : (
          navItems.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
            >
              {/* Parent Item Row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-slate-500">
                    <button
                      onClick={() => moveItem(idx, "up")}
                      disabled={idx === 0}
                      className="p-1 hover:text-white disabled:opacity-20"
                      title="Move Up"
                    >
                      <MoveUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveItem(idx, "down")}
                      disabled={idx === navItems.length - 1}
                      className="p-1 hover:text-white disabled:opacity-20"
                      title="Move Down"
                    >
                      <MoveDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.highlight && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/30">
                          Highlighted Button
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-slate-400">{item.href}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setParentForSub(item);
                      setEditingSubId(null);
                      setSubForm({ label: "", href: "", description: "" });
                      setIsSubModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-400"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Submenu</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingItem(item);
                      setItemForm({ label: item.label, href: item.href, highlight: !!item.highlight });
                      setIsItemModalOpen(true);
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                    title="Edit Item"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setItemToDelete(item)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400"
                    title="Delete Item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Submenu Dropdown List */}
              {item.children && item.children.length > 0 && (
                <div className="pl-6 border-l-2 border-slate-800 ml-4 space-y-2 pt-1">
                  {item.children.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-2.5">
                        <CornerDownRight className="w-3.5 h-3.5 text-amber-400" />
                        <div>
                          <div className="text-xs font-bold text-white">{sub.label}</div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {sub.href} {sub.description ? `• ${sub.description}` : ""}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setParentForSub(item);
                            setEditingSubId(sub.id);
                            setSubForm({
                              label: sub.label,
                              href: sub.href,
                              description: sub.description || "",
                            });
                            setIsSubModalOpen(true);
                          }}
                          className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() =>
                            setSubToDelete({
                              parentId: item.id,
                              subId: sub.id,
                              label: sub.label,
                            })
                          }
                          className="p-1 rounded-md bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Parent Menu Modal */}
      <Modal
        isOpen={isItemModalOpen}
        onClose={() => setIsItemModalOpen(false)}
        title={editingItem ? `Edit Menu Item: ${editingItem.label}` : "Add Main Navigation Item"}
      >
        <form onSubmit={handleItemSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Label / Title *</label>
            <input
              type="text"
              required
              value={itemForm.label}
              onChange={(e) => setItemForm({ ...itemForm, label: e.target.value })}
              placeholder="e.g. Services, Company, Portfolio"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target URL / Route *</label>
            <input
              type="text"
              required
              value={itemForm.href}
              onChange={(e) => setItemForm({ ...itemForm, href: e.target.value })}
              placeholder="e.g. /services, /about-us, #contact"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="highlight-check"
              checked={itemForm.highlight}
              onChange={(e) => setItemForm({ ...itemForm, highlight: e.target.checked })}
              className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-primary-500 focus:ring-0"
            />
            <label htmlFor="highlight-check" className="text-xs font-semibold text-slate-300">
              Render as Highlighted Call-to-Action button
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsItemModalOpen(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-md shadow-primary-500/20"
            >
              {saving ? "Saving..." : editingItem ? "Update Item" : "Create Item"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Submenu Item Modal */}
      <Modal
        isOpen={isSubModalOpen}
        onClose={() => setIsSubModalOpen(false)}
        title={editingSubId ? "Edit Submenu Item" : `Add Submenu to ${parentForSub?.label}`}
      >
        <form onSubmit={handleSubSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Submenu Label *</label>
            <input
              type="text"
              required
              value={subForm.label}
              onChange={(e) => setSubForm({ ...subForm, label: e.target.value })}
              placeholder="e.g. Case Studies, Custom Software Development"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Target URL *</label>
            <input
              type="text"
              required
              value={subForm.href}
              onChange={(e) => setSubForm({ ...subForm, href: e.target.value })}
              placeholder="e.g. /case-studies, /services/custom-software-development"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Brief Description (Optional)</label>
            <input
              type="text"
              value={subForm.description}
              onChange={(e) => setSubForm({ ...subForm, description: e.target.value })}
              placeholder="e.g. Client success stories and delivery benchmarks"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-primary-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsSubModalOpen(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-md shadow-primary-500/20"
            >
              {saving ? "Saving..." : editingSubId ? "Update Submenu" : "Add Submenu"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Parent Confirm */}
      <ConfirmModal
        isOpen={!!itemToDelete}
        onClose={() => setItemToDelete(null)}
        onConfirm={confirmDeleteItem}
        title="Delete Navigation Item"
        message={`Are you sure you want to delete "${itemToDelete?.label}" and all its submenus?`}
      />

      {/* Delete Submenu Confirm */}
      <ConfirmModal
        isOpen={!!subToDelete}
        onClose={() => setSubToDelete(null)}
        onConfirm={confirmDeleteSub}
        title="Delete Submenu Item"
        message={`Are you sure you want to delete the submenu "${subToDelete?.label}"?`}
      />
    </div>
  );
}
