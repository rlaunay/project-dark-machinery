import http from "@/libs/http";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export enum Roles {
  user = 'USER',
  gameMaster = 'GAME_MASTER',
  admin = 'ADMIN',
}

type User = {
  id: number;
  email: string;
  discordId: string;
  username: string;
  avatarUrl: string;
  role: Roles;
}

type SessionContextType = {
  user: User | null;
  loading: boolean;
  login: (url: string) => void;
}

const SessionContext = createContext<SessionContextType | null>(null);

type SessionProviderProps = PropsWithChildren<{}>;

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    http.get<User>('/me')
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, []);

  const login = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const user = await http.get<User>(url)
      setUser(user)
    } catch (e) {
      throw new Error('Erreur lors de la connexion', { cause: e })
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <SessionContext.Provider value={{
      user,
      loading,
      login
    }} >
      {children}
    </SessionContext.Provider>
  )
};

export function useSession() {
  const ctx = useContext(SessionContext);
  if (ctx === null) throw new Error('Error with session context');
  return ctx;
}