import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { toast } from "react-toastify";
  import { IUserDashboard, IUserTechs } from "../pages/Dashboard";
  import { api } from "../services/api";
  import { AuthContext, IProfileResponse } from "./AuthContext";
  
  export interface ITechProviderProps {
    children: ReactNode;
  }
  
  export interface IUserContext {
    techs: IUserTechs[];
    removeTech: (id: IUserTechs) => Promise<void>;
    modalIsOpen: boolean;
    handleModal: () => void;
    addTechs: (data: IUserTechs) => void;
    loadingModal: boolean;
    setTechs: Dispatch<React.SetStateAction<IUserTechs[]>>;
    user: IUserDashboard;
  }
  
  export const TechContext = createContext<IUserContext>({} as IUserContext);
  
  export const UserTechProvider = ({ children }: ITechProviderProps) => {
    const [techs, setTechs] = useState([] as IUserTechs[]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [loadingModal, setLoadingModal] = useState(false);
    const { user } = useContext(AuthContext);
  
    const handleModal = () => {
      modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    };
  
    const removeTech = async (id: IUserTechs) => {
      setLoadingModal(true);
      const getToken = localStorage.getItem("@Token-KenzieHub");
      try {
        api.defaults.headers.common.authorization = `Bearer ${getToken}`;
        const deleteTech = await api.delete<IUserTechs>(`/users/techs/${id.id}`);
        toast.success("Tecnologia deletada com sucesso", {
          autoClose: 1000,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingModal(false);
        const { data } = await api.get<IProfileResponse>("/profile");
  
        setTechs(data.techs);
      }
    };
  
    const addTechs = async (data: IUserTechs) => {
      setLoadingModal(true);
      const getToken = localStorage.getItem("@Token-KenzieHub");
      try {
        api.defaults.headers.common.authorization = `Bearer ${getToken}`;
        const response = await api.post<IUserTechs>(`/users/techs`, data);
        toast.success("Tecnologia cadastrada", {
          autoClose: 1000,
        });
        setTechs([...techs, response.data]);
        setModalIsOpen(false);
      } catch (error) {
        console.error(error);
        toast.error("Falha ao cadastrar tecnologia, verifique as informações", {
          autoClose: 1000,
        });
      } finally {
        setLoadingModal(false);
      }
    };
  
    useEffect(() => {
      async function getTechs() {
        const getToken = localStorage.getItem("@Token-KenzieHub");
        try {
          api.defaults.headers.common.authorization = `Bearer ${getToken}`;
          const data = await api.get<IUserTechs>("/profile");
          setTechs(data.data.techs);
        } catch (error) {
          console.error(error);
        }
      }
      getTechs();
    }, [user]);
  
    return (
      <TechContext.Provider
        value={{
          techs,
          removeTech,
          modalIsOpen,
          handleModal,
          addTechs,
          loadingModal,
          setTechs,
          user,
        }}
      >
        {children}
      </TechContext.Provider>
    );
  };
  