// src/component/ProjectDetail.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

export default function ProjectDetail({ data }) {
  const [thumbUrl, setThumbUrl] = useState("");

  useEffect(() => {
    if (!data?.thumbnail) return;
    const supabase = createClient();
    const { data: pub } = supabase.storage.from("portfolio").getPublicUrl(data.thumbnail);
    setThumbUrl(pub.publicUrl);
  }, [data?.thumbnail]);

  return (
    <div className="project-detail">
      {thumbUrl && (
        <Image src={thumbUrl} alt={data?.title ?? "thumbnail"} width={800} height={450} />
      )}
      <h1>{data?.title}</h1>
      {/* 필요한 필드 더 렌더링 */}
    </div>
  );
}
