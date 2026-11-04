export async function fetchCMS<T>(module: string): Promise<T> {
  const res = await fetch(`/api/admin/cms/${module}`);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || `Failed to fetch ${module}`);
  }
  const data = await res.json();
  return data.data;
}

export async function saveCMS<T>(module: string, payload: any): Promise<T> {
  const res = await fetch(`/api/admin/cms/${module}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || `Failed to save ${module}`);
  }
  const data = await res.json();
  return data.data;
}

export async function deleteCMS(module: string, id: string): Promise<boolean> {
  const res = await fetch(`/api/admin/cms/${module}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || `Failed to delete from ${module}`);
  }
  const data = await res.json();
  return data.success;
}

export async function fetchMedia(): Promise<any[]> {
  const res = await fetch("/api/admin/media");
  if (!res.ok) {
    throw new Error("Failed to load media library");
  }
  const data = await res.json();
  return data.data;
}

export async function uploadMedia(file: File): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/admin/media", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Upload failed");
  }
  const data = await res.json();
  return data.data;
}

export async function deleteMedia(fileName: string): Promise<boolean> {
  const res = await fetch(`/api/admin/media?fileName=${encodeURIComponent(fileName)}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Delete failed");
  }
  return true;
}
