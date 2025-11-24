import { supabase } from "../lib/supabase";

// CREATE WORKSPACE
export async function createWorkspace(name: string, logo_url: string | null = null) {
  const { data, error } = await supabase
    .from("workspaces")
    .insert({ name, logo_url });

  return { data, error };
}

// GET ALL WORKSPACES (optional)
export async function getWorkspaces() {
  const { data, error } = await supabase
    .from("workspaces")
    .select("*")
    .order("created_at", { ascending: false });

  return { data, error };
}
