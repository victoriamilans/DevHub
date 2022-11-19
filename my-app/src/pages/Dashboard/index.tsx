import { useContext } from "react";
import logo from "../../assets/logo.png";
import {
  StyledDashboard,
  StyledDashContainer,
  StyledHeader,
  StyledLinkBackLogin,
  StyledProfile,
} from "./style";
import { AuthContext, IUserContext } from "../../contexts/AuthContext";
import { TechList } from "../../components/TechList";
import { TechContext } from "../../contexts/TechContext";
import { TechsModal } from "../../components/TechsModal";
import {
  ModalOverlay,
  StyledTechsHeader,
} from "../../components/TechsModal/style";
import { Loading } from "../../components/Loading";
import Spinner from "react-spinner-material";

export interface IUserTechs {
  id?: string | undefined;
  title: string;
  status: string;
  techs: [];
}

export interface IUserDashboard {
  name: string;
  course_module: string;
  id?: number;
}

export const Dashboard = () => {
  const { user } = useContext<IUserContext>(AuthContext);
  const { modalIsOpen, handleModal, loadingModal, setTechs } =
    useContext(TechContext);

  return (
    <>
      {loadingModal || user === null ? (
        <div className="loading">
          <Spinner radius={120} color={"#fff"} stroke={2} visible={true} />
          <Loading/>
        </div>
      ) : (
        <StyledDashContainer>
          <StyledHeader>
            <div>
              <img src={logo} alt="" />
              <StyledLinkBackLogin
                to="/login"
                onClick={() => {
                  localStorage.clear();
                  setTechs([]);
                }}
              >
                Sair
              </StyledLinkBackLogin>
            </div>
          </StyledHeader>
          <StyledProfile>
            <div>
              <h1>Olá, {user.name}</h1>
              <p>{user.course_module}</p>
            </div>
          </StyledProfile>
          <StyledDashboard>
            <div>
              <StyledTechsHeader>
                <h2>Tecnologias</h2>
                <span onClick={() => handleModal()}>+</span>
              </StyledTechsHeader>
              {modalIsOpen && (
                <ModalOverlay>
                  <TechsModal>
                    <div>
                      <h2>Cadastrar Tecnologia</h2>
                      <button type="button" onClick={() => handleModal()}>
                        X
                      </button>
                    </div>
                  </TechsModal>
                </ModalOverlay>
              )}
            </div>

            <TechList></TechList>
          </StyledDashboard>
        </StyledDashContainer>
      )}
    </>
  );
};
