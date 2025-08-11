"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import ProjectDetail from "@/component/ProjectDetail";

export default function ProjectPage() {
  const id = useSearchParams().get("id");
  const supabase = createClient();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data } = await supabase
        .from("portfolio")
        .select("*")
        .eq("id", id)
        .single();
      setData(data || null);
    })();
  }, [id, supabase, setData]);

  if (!id) return <p>id가 없습니다.</p>;
  if (!data) return <p>Loading…</p>;
  return <ProjectDetail data={data} />;
}
