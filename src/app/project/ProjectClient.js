// src/app/project/ProjectClient.js
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import ProjectDetail from "@/component/ProjectDetail";

export default function ProjectClient() {
  const sp = useSearchParams();
  const id = sp.get("id");
  const [item, setItem] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!id) return;
    const supabase = createClient();
    let cancel = false;

    (async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .eq("id", id)
        .single();
      if (cancel) return;
      error ? setErr(error.message) : setItem(data);
    })();

    return () => {
      cancel = true;
    };
  }, [id]);

  if (!id) return <p>id가 없습니다.</p>;
  if (err) return <p style={{ color: "crimson" }}>Error: {err}</p>;
  if (!item) return <p>Loading…</p>;
  return <ProjectDetail data={item} />;
}
