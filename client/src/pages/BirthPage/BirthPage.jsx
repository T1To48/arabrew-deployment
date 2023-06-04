import { BackLayout } from "../../styles/PageLayout/BackLayout.jsx";
import { HeaderWrapper } from "../../styles/PageLayout/HeaderWrapper.jsx";
import { TitleWrapper } from "../../styles/PageLayout/TitleWrapper.jsx";
import { PageTitle } from "../../styles/PageLayout/PageTitle.jsx";
import { Container } from "../../styles/PageLayout/Container.jsx";
import { Flex } from "../../styles/Flex.jsx";
import { InstructionPrompt } from "../../styles/BioPage/InstructionPrompt.jsx";
import { StyledSaveAndNextButton } from "../../styles/BioPage/StyledSaveAndNextButton.jsx";
import { BioStyledDiv } from "../../styles/BioPage/BioStyledDiv.jsx";
import CustomDropdown from "../../styles/BirthPage/StyledDropDown.jsx";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";

export default function BirthPage() {
  const [startYear, setStartYear] = useState(1980);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState({
    value: "",
    dataField: "year",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArray = [];
    for (let year = startYear; year <= currentYear - 4; year++) {
      yearsArray.push({ label: year, value: year });
    }
    setYears(yearsArray);
  }, [startYear]);

  const dispatch = useDispatch();

  return (
    <BackLayout>
      <HeaderWrapper>
        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}></div>
        <TitleWrapper>
          <PageTitle>Add Age</PageTitle>
        </TitleWrapper>

        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}>
          {/*  here you can add code for additional elements in the header */}
        </div>
      </HeaderWrapper>
      <Container>
        {/* here you can add code for the container page */}
        <Flex
          style={{
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Flex
            style={{
              height: "10%",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <InstructionPrompt>Add your Year of Birth</InstructionPrompt>
          </Flex>
          <BioStyledDiv>
            <CustomDropdown
              optionsArray={years}
              placeHolder="Year"
              selected={selectedYear}
              setSelected={setSelectedYear}
              isSearchable={false}
            />
          </BioStyledDiv>
          <Flex style={{ height: "20%", width: "100%" }}>
            <StyledSaveAndNextButton
              onClick={() => {
                dispatch(addDetail(selectedYear));
                // navigate("/nationalityPage");
              }}
            >
              <i>Save & Next</i>
            </StyledSaveAndNextButton>
          </Flex>
        </Flex>
      </Container>
    </BackLayout>
  );
}
