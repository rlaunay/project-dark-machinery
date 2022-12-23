import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useSession } from "../context";

export default function Callback() {
  const { login } = useSession();
  const navigate = useNavigate();
  const [sp, setSp] = useSearchParams();

  useEffect(() => {
    if (!sp.has('code')) return navigate('/');
    const url = new URL('http://localhost:3333/discord/callback');
    url.search = window.location.search;
    setSp('');
    login(url.toString());
    // navigate('/');
  }, [])

  return null;
}