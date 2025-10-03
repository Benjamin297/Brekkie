import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const questions = [
    {
      text: "Can I schedule my breakfast ahead of time?",
      title:
        "Yes! You can pre-order your breakfast for the next morning and choose your preferred delivery time.",
    },
    {
      text: "What areas do you deliver to?",
      title:
        "We currently deliver to select locations within [insert city/region]. You can check availability by entering your address on the homepage.",
    },
    {
      text: "What time can I place an order?",
      title:
        "Orders can be placed from 6:00 AM to 11:00 AM for same-day delivery. Pre-orders for the next day are also available.",
    },
    {
      text: "How long does delivery take?",
      title:
        "On average, delivery takes 20–40 minutes, depending on your location and order size.",
    },
    {
      text: "Are there healthy breakfast options?",
      title:
        "Yes, we offer a variety of healthy options including oats, fruit bowls, smoothies, and low-calorie meals.",
    },
    {
      text: "What payment methods do you accept?",
      title:
        "We accept debit/credit cards, mobile transfers, and cash on delivery.",
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
            {dropDown === index ? <AnswerCard>{item.title}</AnswerCard> : null}
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
  align-items: center;
  flex-direction: column;
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
  background-color: #eee;
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
