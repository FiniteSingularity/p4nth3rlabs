import styled, { keyframes } from "styled-components";

interface TextBoxProps {
  type: string;
}

const textBoxWidths = {
  github: "400px",
  twitter: "276px",
  discord: "374px",
  slogan: "432px",
  merch: "304px",
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
}`;

function getWidthFromType(props: TextBoxProps) {
  const { type } = props;

  switch (type) {
    case "twitter":
      return textBoxWidths.twitter;
    case "discord":
      return textBoxWidths.discord;
    case "github":
      return textBoxWidths.github;
    case "slogan":
      return textBoxWidths.slogan;
  }
}

function getGrowAnimation(props: TextBoxProps) {
  const { type } = props;
  switch (type) {
    case "twitter":
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.twitter}; }
    `;
    case "discord":
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.discord}; }
    `;
    case "github":
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.github}; }
    `;
    case "slogan":
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.slogan}; }
    `;
    case "merch":
      return keyframes`
      from { width: 0; }
      to { width: ${textBoxWidths.merch}; }
    `;
  }
}

const textBoxHeight = "36px";
const textBoxBorderRadius = "8px";
const textBoxSideWidth = "12px";

const TextBoxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${textBoxHeight};
  left: 1205px;
  top: 1002px;
  max-width: fit-content;
  overflow: hidden;
  background: transparent;
  border-radius: ${textBoxBorderRadius};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const TextBox = styled.div<TextBoxProps>`
  animation: ${(props) => getGrowAnimation(props)} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
  background-color: var(--black);
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: ${textBoxHeight};
  width: ${(props) => getWidthFromType(props)};
`;

const TextBoxLeft = styled.span`
  width: ${textBoxSideWidth};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-radius: ${textBoxBorderRadius} 0 0 ${textBoxBorderRadius};
  background-color: var(--black);
`;

const TextBoxRight = styled.span`
  width: ${textBoxSideWidth};
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
  border-radius: 0 ${textBoxBorderRadius} ${textBoxBorderRadius} 0;
  background-color: var(--black);
  position: relative;
  left: -1px;
`;

const TextBoxText = styled.span`
  animation: ${fadeIn} 3s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 1s;
  overflow: hidden;
  opacity: 0;
  white-space: nowrap;
  color: var(--white);
  font-family: var(--font-family-main);
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
`;

export { TextBox, TextBoxText, TextBoxLeft, TextBoxRight, TextBoxContainer };
