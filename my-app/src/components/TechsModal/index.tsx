import { ReactNode, useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledModal } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { Error } from "../../pages/Signup/style";
import { IUserTechs } from "../../pages/Dashboard";

interface IModalProps {
  children: ReactNode;
}

const schema = yup.object({
  title: yup.string().required("Digite o nome da tecnologia"),
  status: yup.string().required("Selecione um status"),
});

export const TechsModal = ({ children }: IModalProps) => {
  const { addTechs } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserTechs>({
    resolver: yupResolver(schema),
  });
  return (
    <StyledModal>
      {children}
      <form onSubmit={handleSubmit(addTechs)}>
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          placeholder="Digite o nome da tecnologia"
          id="title"
          {...register("title")}
        />
        <Error>{errors.title?.message}</Error>

        <label htmlFor="status">Selecionar status</label>
        <select {...register("status")}>
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <Error>{errors.status?.message}</Error>

        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </StyledModal>
  );
};
