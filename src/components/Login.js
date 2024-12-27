import React, { useState } from "react";

const Login = () => {
  // Usuario y contraseña válidos definidos en el archivo
  const validUser = {
    email: "usuario@ejemplo.com",
    password: "123456",
  };

  // Estados para los inputs y mensajes de error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return false;
    }
    if (email !== validUser.email || password !== validUser.password) {
      setError("El correo electrónico o la contraseña son incorrectos.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess("Inicio de sesión exitoso. ¡Bienvenido!");
      setError("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
