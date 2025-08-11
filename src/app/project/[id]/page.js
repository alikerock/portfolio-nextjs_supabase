// app/project/[id]/page.js  (CSR 버전)
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client"; // 브라우저 클라이언트
import ProjectDetail from "@/component/ProjectDetail";

export default function ProjectPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    if (!id) return;
    let alive = true;

    (async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .eq("id", id)
        .single();

      if (!alive) return;
      if (error) setError(error.message);
      else setData(data);
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (error) return <p style={{ color: "crimson" }}>Error: {error}</p>;
  if (!data) return <p>Loading…</p>;

  return <ProjectDetail data={data} />;
}