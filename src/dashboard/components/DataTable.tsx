"use client";

import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  accessor?: (item: T) => React.ReactNode;
  cell?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKey?: keyof T;
  searchPlaceholder?: string;
  itemsPerPage?: number;
  emptyMessage?: string;
  filterCategories?: string[];
  filterOptions?: string[];
  filterKey?: keyof T;
  loading?: boolean;
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  searchKey,
  searchPlaceholder = "Search records...",
  itemsPerPage = 10,
  emptyMessage = "No records found.",
  filterCategories,
  filterOptions,
  filterKey,
  loading = false,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const activeCategories = filterCategories || filterOptions;

  // Filter & Search logic
  const filteredData = data.filter((item) => {
    let matchesCategory = true;
    if (filterKey && selectedCategory !== "All") {
      matchesCategory = String(item[filterKey]).toLowerCase() === selectedCategory.toLowerCase();
    }

    let matchesSearch = true;
    if (searchKey && search.trim() !== "") {
      const val = String(item[searchKey] || "").toLowerCase();
      matchesSearch = val.includes(search.toLowerCase());
    }

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-md overflow-hidden space-y-4">
      {/* Top Filter Bar */}
      <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {searchKey && (
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary-500"
            />
          </div>
        )}

        {activeCategories && activeCategories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" />
              Filter:
            </span>
            {activeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary-600 text-white font-bold shadow-sm"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950/70 text-slate-400 uppercase font-bold text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={`py-3.5 px-4 sm:px-6 ${col.className || ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-12 text-center text-slate-400">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((item, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-800/40 transition-colors">
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className={`py-4 px-4 sm:px-6 align-middle ${col.className || ""}`}>
                      {col.cell
                        ? col.cell(item)
                        : col.accessor
                        ? col.accessor(item)
                        : col.accessorKey
                        ? String(item[col.accessorKey] ?? "")
                        : null}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div>
          Showing <span className="font-bold text-white">{filteredData.length === 0 ? 0 : startIndex + 1}</span> to{" "}
          <span className="font-bold text-white">{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> of{" "}
          <span className="font-bold text-white">{filteredData.length}</span> results
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage >= totalPages}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
