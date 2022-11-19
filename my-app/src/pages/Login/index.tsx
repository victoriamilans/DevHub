import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Button, StyledLinkLogin } from "../../components/Button/style";
import { StyledLoading } from "../../components/Loading";
import Spinner from "react-spinner-material";
import logo from "../../assets/logo.png";
import eyes from "../../assets/eyes.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "../Signup/style";
import { useContext } from "react";
import { AuthContext, IUserContext } from "../../contexts/AuthContext";

export interface IUserLogin {
  email: string;
  password: string;
  token: string;
  id: string;
  user: [];
}

interface IUserLoginProps {
  type: string;
  inputType: Function;
}

const schema = yup.object({
  email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
  password: yup.string().required("Digite sua senha"),
});

export const Login = ({ type, inputType }: IUserLoginProps) => {
  const { handleLogin, loading } = useContext<IUserContext>(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {loading ? (
        <>
          <Spinner radius={120} color={"#fff"} stroke={2} visible={true} />
          <StyledLoading>Carregando</StyledLoading>
        </>
      ) : (
        <>
          <img src={logo} alt="Logo" className="logoLogin" />
          <Container height="true" onSubmit={handleSubmit(handleLogin)}>
            <h1 className="title">Login</h1>

            <label htmlFor={"email"}>Email</label>
            <Input
              type={"email"}
              placeholder={"Email"}
              id={"email"}
              {...register("email")}
            />
            <Error>{errors.email?.message}</Error>

            <label htmlFor={"senha"}>Senha</label>
            <div>
              <Input
                type={type}
                placeholder={"Senha"}
                id={"senha"}
                {...register("password")}
              />
              <img
                src={eyes}
                alt=""
                className="eye"
                onClick={() =>
                  type === "password"
                    ? inputType("text")
                    : inputType("password")
                }
              />
            </div>
            <Error>{errors.password?.message}</Error>
            <Button type="submit" color="true">
              Entrar
            </Button>

            <span>Ainda não possui uma conta?</span>
            <StyledLinkLogin to={"/signup"}>
              <p>Cadastre-se</p>
            </StyledLinkLogin>
          </Container>
        </>
      )}
    </>
  );
};
