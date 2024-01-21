"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from '@/app/ui/form.module.css'


const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [username, setUsername] = useState<string>("username");
  const [password, setPassword] = useState<string>("password");
  const router = useRouter();
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);
    setLoading(true);

    const responseNextAuth = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
    } else {
      handleRedirect();
    }
  };

  const handleRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} >
          <label
            className={styles.label}
            htmlFor="username">Username</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label
            className={styles.label}
            htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {!errors.length && (
            <button
              className={styles.submit}
              type="submit" disabled={loading}>
              {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
          )}
          {!errors.length && isRegistrationSuccessful && (
            <div>
              <p>Ingreso exitosamente.</p>
              <button
                className={styles.Link}
                onClick={handleRedirect}>Ingresar</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;