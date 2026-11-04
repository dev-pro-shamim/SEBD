import React from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  color?: "primary" | "emerald" | "amber" | "sky" | "rose";
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = "primary",
}: StatsCardProps) {
  const colorMap = {
    primary: "bg-primary-500/10 text-primary-400 border-primary-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-md hover:border-slate-700 transition-all">
      <div className="flex items-center justify-between text-slate-400">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
          {title}
        </span>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${colorMap[color]}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="text-3xl font-black text-white font-mono">
        {value}
      </div>

      {(subtitle || trend) && (
        <div className="flex items-center justify-between text-[11px] pt-1">
          {subtitle && <span className="text-slate-400">{subtitle}</span>}
          {trend && <span className="font-semibold text-emerald-400">{trend}</span>}
        </div>
      )}
    </div>
  );
}
