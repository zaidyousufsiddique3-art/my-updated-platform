import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

export async function testDB() {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id")
      .limit(1);

    if (error) return { connected: false, error: error.message };

    return { connected: true, data };
  } catch (err: any) {
    return { connected: false, error: err.message };
  }
}
import { testDB } from "./services/dbTest";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    testDB().then((res) => {
      console.log("DB TEST RESULT:", res);
    });
  }, []);

  return (
    // your UI here
  );
}

export default App;

