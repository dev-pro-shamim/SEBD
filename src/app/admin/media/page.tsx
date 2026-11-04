"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Image as ImageIcon,
  UploadCloud,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  ShieldCheck,
  Search,
  FileCode,
  HardDrive,
} from "lucide-react";
import { fetchMedia, uploadMedia, deleteMedia } from "@/dashboard/services/cms";
import ConfirmModal from "@/dashboard/components/ConfirmModal";

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [fileToDelete, setFileToDelete] = useState<any | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadMedia = async () => {
    setLoading(true);
    try {
      const data = await fetchMedia();
      setMediaList(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        await uploadMedia(files[i]);
      }
      setToast("Upload complete!");
      setTimeout(() => setToast(null), 3000);
      loadMedia();
    } catch (err: any) {
      alert(err.message || "Upload failed");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  const handleDelete = async () => {
    if (!fileToDelete) return;
    setDeleting(true);
    try {
      await deleteMedia(fileToDelete.fileName);
      setFileToDelete(null);
      setToast("File removed from media storage.");
      setTimeout(() => setToast(null), 3000);
      loadMedia();
    } catch (e) {
      alert("Failed to delete file");
    } finally {
      setDeleting(false);
    }
  };

  const filtered = mediaList.filter((m) =>
    m.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Toast */}
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
            <ImageIcon className="w-6 h-6 text-amber-400" />
            <span>Media Library & Assets</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Upload images, banners, and icons. Images are stored securely in public storage and can be used anywhere in the CMS.
          </p>
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-primary-500/20"
        >
          <UploadCloud className="w-4 h-4" />
          <span>{uploading ? "Uploading..." : "Upload Images"}</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileUpload(e.target.files)}
          multiple
          accept="image/*"
          className="hidden"
        />
      </div>

      {/* Drag & Drop Upload Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFileUpload(e.dataTransfer.files);
        }}
        className="p-8 border-2 border-dashed border-slate-800 hover:border-primary-500/50 bg-slate-900/50 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center">
          <UploadCloud className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">Drop images here or click to browse</div>
          <div className="text-xs text-slate-400 mt-0.5">Supports PNG, JPG, WebP, SVG (Max 5MB each)</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search uploaded files..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
          />
        </div>

        <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
          <HardDrive className="w-3.5 h-3.5 text-slate-500" />
          <span>{filtered.length} files found</span>
        </div>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="p-12 text-center text-xs text-slate-500">Loading media library...</div>
      ) : filtered.length === 0 ? (
        <div className="p-12 text-center text-xs text-slate-500 bg-slate-900 border border-slate-800 rounded-2xl">
          No media files found. Upload images to populate the library.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-square w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e: any) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Metadata & Actions */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800 space-y-2">
                <div className="truncate text-xs font-semibold text-white" title={item.name}>
                  {item.name}
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>{(item.size / 1024).toFixed(1)} KB</span>
                  <span className="font-mono">{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  <button
                    onClick={() => copyToClipboard(item.url)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-slate-200 transition-colors"
                  >
                    {copiedUrl === item.url ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => setFileToDelete(item)}
                    className="p-1 rounded bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400"
                    title="Delete file"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmModal
        isOpen={!!fileToDelete}
        onClose={() => setFileToDelete(null)}
        onConfirm={handleDelete}
        title="Delete Media File"
        message={`Are you sure you want to permanently delete "${fileToDelete?.name}"? Any CMS sections referencing this image will need to be updated.`}
        loading={deleting}
      />
    </div>
  );
}
