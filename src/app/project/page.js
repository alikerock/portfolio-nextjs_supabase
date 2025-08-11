// src/app/project/page.js
import { Suspense } from "react";
import ProjectClient from "./ProjectClient";

export const dynamic = "force-static"; // 정적 출력 강제

export default function Page() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <ProjectClient />
    </Suspense>
  );
}