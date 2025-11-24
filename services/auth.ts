import { supabase } from "../lib/supabase";

// REGISTER USER
export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const { data, error } = await supabase.from("users").insert({
    name,
    email,
    password,
  });

  return { data, error };
}

// LOGIN USER
export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  return { data, error };
}
