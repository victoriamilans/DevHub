import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledSpan, StyledTechCard } from "./style";
import lixeira from "../../assets/lixeira.png";
import { IUserTechs } from "../../pages/Dashboard";

export const TechCard = () => {
  const { techs, removeTech } = useContext(TechContext);

  return (
    <>
      {techs.length === 0 ? (
        <StyledSpan>
          <span>Você ainda não possui tecnologias cadastradas</span>
        </StyledSpan>
      ) : (
        techs.map((tech: IUserTechs) => {
          return (
            <StyledTechCard key={tech.id}>
              <h2>{tech.title}</h2>
              <div>
                <p>{tech.status}</p>
                {<img src={lixeira} alt="" onClick={() => removeTech(tech)} />}
              </div>
            </StyledTechCard>
          );
        })
      )}
    </>
  );
};
