import { Button } from "../../components/Button/style";
import { Container } from "../../components/Container/style";
import { Input } from "../../components/Input/style";
import { Error, Select, StyledLinkSignup } from "./style";
import logo from "../../assets/logo.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext, IUserContext } from "../../contexts/AuthContext";

export interface IUserSignup {
  email: string;
  password: string;
  password_validation: string;
  name: string;
  bio: string;
  contact: number;
  course_module: string;
}

interface IUserSignupProps {
  inputType: Function;
}

const schema = yup.object({
  name: yup.string().required("Digite seu nome").min(3, "Mínimo 3 caracteres"),
  email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Digite sua senha")
    .min(6, "Mínimo 8 caracteres")
    .matches(
      /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
      "Letra maiúscula, minuscula, número e caracter especial"
    ),
  bio: yup.string().required("Fale sobre você"),
  contact: yup.string().required("Informe seu contato"),
  password_validation: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  course_module: yup.string().required("Selecione um módulo"),
});

export const Signup = (inputType: IUserSignupProps) => {
  const { handleSignup } = useContext<IUserContext>(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignup>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="logoBox">
        <img src={logo} alt="Logo" className="logo" />
        <StyledLinkSignup to={"/login"}>
          <span>Voltar</span>
        </StyledLinkSignup>
      </div>
      <Container onSubmit={handleSubmit(handleSignup)}>
        <h1 className="title">Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>

        <label htmlFor={"nome"}>Email</label>
        <Input
          placeholder={"Digite aqui seu nome"}
          id={"nome"}
          {...register("name")}
        />
        <Error>{errors.name?.message}</Error>

        <label htmlFor={"email"}>Email</label>

        <Input
          placeholder={"Digite aqui seu email"}
          id={"email"}
          {...register("email")}
        />
        <Error>{errors.email?.message}</Error>

        <label htmlFor={"senha"}>Senha</label>

        <Input
          placeholder={"Digite aqui sua senha"}
          id={"senha"}
          {...register("password")}
        />
        <Error>{errors.password?.message}</Error>

        <label htmlFor={"confirmarSenha"}>Confirmar senha</label>

        <Input
          placeholder={"Confirme sua senha"}
          id={"confirmarSenha"}
          {...register("password_validation")}
        />
        <Error>{errors.password_validation?.message}</Error>

        <label htmlFor={"bio"}>Bio</label>

        <Input
          placeholder={"Fale sobre você"}
          id={"bio"}
          {...register("bio")}
        />
        <Error>{errors.bio?.message}</Error>

        <label htmlFor={"contact"}>Contato</label>

        <Input
          placeholder={"Opção de contato"}
          id={"contact"}
          {...register("contact")}
        />
        <Error>{errors.contact?.message}</Error>

        <label htmlFor={"module"}>Selecionar módulo</label>
        <Select {...register("course_module")}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </Select>
        <Error>{errors.course_module?.message}</Error>

        <Button type="submit" disable="true">
          Cadastrar
        </Button>
      </Container>
    </>
  );
};
