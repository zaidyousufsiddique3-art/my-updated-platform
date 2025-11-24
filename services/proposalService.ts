import { supabase } from "../lib/supabase";

// CREATE PROPOSAL
export async function createProposal(
  user_id: string,
  workspace_id: string,
  name: string,
  proposal_data: any
) {
  const { data, error } = await supabase
    .from("proposals")
    .insert({
      user_id,
      workspace_id,
      name,
      proposal_data
    });

  return { data, error };
}

// GET ALL PROPOSALS FOR A USER
export async function getProposalsByUser(user_id: string) {
  const { data, error } = await supabase
    .from("proposals")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  return { data, error };
}

// GET ALL PROPOSALS FOR A WORKSPACE
export async function getProposalsByWorkspace(workspace_id: string) {
  const { data, error } = await supabase
    .from("proposals")
    .select("*")
    .eq("workspace_id", workspace_id)
    .order("created_at", { ascending: false });

  return { data, error };
}

// GET A SINGLE PROPOSAL
export async function getProposalById(id: string) {
  const { data, error } = await supabase
    .from("proposals")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}
