import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserLogin } from "../pages/Login";
import { IUserSignup } from "../pages/Signup";
import { api } from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  handleLogin(data: IUserLogin): void;
  handleSignup(data: IUserSignup): void;
  loading: boolean;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  token: {};
  setToken: React.Dispatch<React.SetStateAction<IProfileResponse>>;
}

export interface IProfileResponse {
  token: string;
  user: {
    email: string;
    password: string;
    password_validation: string;
    name: string;
    bio: string;
    contact: number;
    course_module: string;
    id: string;
    token: string;
  };
  id: string;
  techs: [];
}

export type IUser = Omit<IUserSignup, "password_validation">;

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState({});

  const navigate = useNavigate();

  const handleLogin = async (data: IUserLogin) => {
    setLoading(true);
    try {
      const response = await api.post<IProfileResponse>("/sessions ", data);
      window.localStorage.clear();
      window.localStorage.setItem("@Token-KenzieHub", response.data.token);
      window.localStorage.setItem("@userID-KenzieHub", response.data.user.id);
      toast.success("Login efetuado com sucesso", {
        autoClose: 1000,
      });
      setToken(response.data.token);
      setUser(response.data.user);
      navigate(`/dashboard/ ${response.data.user.name}`, { replace: true });
    } catch (error) {
      toast.error("Falha ao logar, verifique as informações", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getUser() {
      const getToken = localStorage.getItem("@Token-KenzieHub");
      if (getToken) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${getToken}`;
          const { data } = await api.get<IUser>("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getUser();
  }, []);

  const handleSignup = async (data: IUserSignup) => {
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    try {
      await api.post("/users", newData);
      toast.success("Conta criada com sucesso!", {
        autoClose: 1000,
      });
      navigate(`/login`);
    } catch {
      toast.error("Falha ao criar a conta, tente outro email!", {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        loading,
        user,
        setUser,
        token,
        setToken,
        handleSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
