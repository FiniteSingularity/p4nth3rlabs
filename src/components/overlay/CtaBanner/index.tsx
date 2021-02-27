import React from "react";

import { useEffect, useState } from "react";
import Icon from "./TextBoxIcons";

import { TextBox, TextBoxText, TextBoxLeft, TextBoxRight, TextBoxContainer } from "./index.style";

interface TextBoxOption {
  text: string;
  iconName: string;
  type: string;
}

const textBoxOptions: TextBoxOption[] = [
  {
    text: "Build stuff, learn things, love what you do",
    iconName: "lightening",
    type: "slogan",
  },
  {
    text: "!twitter - @whitep4nth3r",
    iconName: "twitter",
    type: "twitter",
  },
  {
    text: "!discord - Join our Discord community",
    iconName: "discord",
    type: "discord",
  },
  {
    text: "!github - Find stream projects on github",
    iconName: "github",
    type: "github",
  },
];

export default function CtaBanner() {
  const [textBoxCurrentKey, setTextBoxCurrentKey] = useState(0);
  const [textBox, setTextBox] = useState(textBoxOptions[textBoxCurrentKey]);

  const atEndOfOptions = textBoxCurrentKey + 1 > textBoxOptions.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      const newKey = atEndOfOptions ? (0 as number) : ((textBoxCurrentKey + 1) as number);
      setTextBoxCurrentKey(newKey);
      setTextBox(textBoxOptions[newKey]);
    }, 30000);
    return () => clearInterval(interval);
  }, [textBoxCurrentKey, atEndOfOptions]);

  return (
    <TextBoxContainer>
      <TextBoxLeft />
      <TextBox key={`item-${textBoxCurrentKey}`} type={textBox.type}>
        <Icon iconName={textBox.iconName}></Icon>
        <TextBoxText>{textBox.text}</TextBoxText>
      </TextBox>
      <TextBoxRight />
    </TextBoxContainer>
  );
}
