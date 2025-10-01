import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const questions = [
    {
      text: "Can I schedule my breakfast ahead of time?",
    },
    {
      text: "What areas do you deliver to?",
    },
    {
      text: "What time can I place an order?",
    },
    {
      text: "How long does delivery take?",
    },
    {
      text: "Are there healthy breakfast options?",
    },
    {
      text: "What payment methods do you accept?",
    },
  ];

  const [dropDown, setDropDown] = useState(null);
  console.log(dropDown);
  const handleDrop = (index) => {
    setDropDown(dropDown === index ? null : index);
  };
  return (
    <MainBody>
      <FaqText>Frequently Asked Question</FaqText>
      <FaqSubText>
        Here are some common questions our customers ask about Brekkie.
      </FaqSubText>
      <CardWrapper>
        {questions.map((item, index) => (
          <QuestionsCard onClick={() => handleDrop(index)} key={index}>
            <QuestionCard>
              <QuestionText>{item.text}</QuestionText>
              <IoIosArrowDown style={{ color: "white", fontSize: "25px" }} />
            </QuestionCard>
            {dropDown === index ? <AnswerCard></AnswerCard> : null}
          </QuestionsCard>
        ))}
      </CardWrapper>
    </MainBody>
  );
};

export default Faq;

const MainBody = styled.div`
  width: 100%;
  height: 80vh;
  min-height: max-content;
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: column;
  background-color: #d5d5d5b2;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const CardWrapper = styled.div`
  width: 40%;
  height: 70%;
  min-height: max-content;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
  gap: 5px;
`;
const FaqText = styled.h2`
  font-size: 48px;
  font-weight: 600;
`;
const FaqSubText = styled.h4`
  font-size: 18px;
  font-weight: 500;
`;
const QuestionsCard = styled.div`
  width: 100%;
  height: 68px;
  min-height: max-content;
  background-color: #6b8e23;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const QuestionCard = styled.div`
  width: 100%;
  height: 68px;
  background-color: #6b8e23;
  padding-inline: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const AnswerCard = styled.div`
  width: 100%;
  height: 68px;
  min-height: max-content;
  background-color: #3f238e;
  padding-inline: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const QuestionText = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: white;
`;
