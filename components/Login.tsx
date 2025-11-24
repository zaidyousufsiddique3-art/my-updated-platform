import { useState } from "react";
import { loginUser } from "../services/auth";

export default function Login({
  onSuccess,
}: {
  onSuccess: (user: any) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const result = await loginUser(email, password);

    if (result.error || !result.data) {
      alert("Login failed");
      return;
    }

    onSuccess(result.data);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleLogin} style={{ marginTop: 10 }}>
        Login
      </button>
    </div>
  );
}
