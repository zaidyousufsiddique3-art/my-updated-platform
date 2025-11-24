import { supabase } from "../lib/supabase";

// ASSIGN USER TO WORKSPACE
export async function assignUserToWorkspace(user_id: string, workspace_id: string) {
  const { data, error } = await supabase
    .from("user_workspaces")
    .insert({ user_id, workspace_id });

  return { data, error };
}

// GET WORKSPACES FOR A USER
export async function getUserWorkspaces(user_id: string) {
  const { data, error } = await supabase
    .from("user_workspaces")
    .select("*, workspaces(*)")
    .eq("user_id", user_id);

  return { data, error };
}
