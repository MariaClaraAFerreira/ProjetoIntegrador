"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Verificar se existe cliente logado ao carregar o app
  useEffect(() => {
    checkCliente();
  }, []);

  const checkCliente = async () => {
    try {
      const response = await fetch("/api/auth/me", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setCliente(data.cliente);
      }
    } catch (error) {
      console.error("Erro ao verificar cliente:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, senha) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Atualiza contexto após login
      await checkCliente();

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setCliente(null);
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const register = async (nome_completo, email, senha) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome_completo, email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        cliente,
        loading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
