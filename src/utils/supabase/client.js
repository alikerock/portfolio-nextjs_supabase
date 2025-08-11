"use client";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

let _client; // 브라우저 전용 싱글톤

export function createClient() {
  if (typeof window === "undefined") {
    throw new Error("createClient()는 브라우저에서만 호출해야 한다");
  }
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anon) throw new Error("NEXT_PUBLIC_SUPABASE_URL/ANON_KEY 누락");
    _client = createSupabaseClient(url, anon, {
      auth: { persistSession: true, detectSessionInUrl: true, autoRefreshToken: true },
    });
  }
  return _client;
}
