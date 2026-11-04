"use client";

import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Check, Loader2, X } from "lucide-react";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  helperText?: string;
  placeholder?: string;
}

export default function ImageUploader({
  value,
  onChange,
  label = "Upload Image",
  helperText = "Direct upload PNG, JPG, or WEBP (or paste an image URL)",
  placeholder = "https://... or upload below",
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onChange(data.data.url);
      } else {
        setError(data.error || "Upload failed.");
      }
    } catch {
      setError("Network error while uploading.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold text-slate-300">{label}</label>}

      <div className="flex flex-col sm:flex-row gap-3 items-start">
        {/* Preview Thumbnail */}
        {value ? (
          <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-slate-950 border border-slate-700 shrink-0 group">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => onChange("")}
              className="absolute top-1 right-1 p-1 rounded-full bg-slate-950/80 text-rose-400 hover:text-white transition-colors"
              title="Remove image"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div className="w-28 h-20 rounded-xl bg-slate-950 border border-dashed border-slate-700 flex flex-col items-center justify-center text-slate-500 shrink-0">
            <ImageIcon className="w-6 h-6 mb-1" />
            <span className="text-[10px]">No image</span>
          </div>
        )}

        {/* Input & Upload Button */}
        <div className="flex-1 space-y-2 w-full">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-primary-500"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="px-3.5 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 disabled:opacity-50"
            >
              {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
              <span>{uploading ? "Uploading..." : "Upload File"}</span>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {error && <p className="text-[11px] text-rose-400 font-semibold">{error}</p>}
          <p className="text-[11px] text-slate-500">{helperText}</p>
        </div>
      </div>
    </div>
  );
}
