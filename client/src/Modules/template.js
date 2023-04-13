import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { DUMMY_CONTACTS } from "./ContactList";

const DUMMY_CHAT = [
    {
        message: `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Donec sit  eget `,
        id: 1,
        date: "10/10/2022",
        time: "20:38",
        name: "John Smith",
    },
    {
        message: `odio commodo euismod. Quisque 
    augue purus, porta vel facilisis ac, accumsan eu elit. 
    Nulla ultricies odio sit amet arcu`,
        id: 0,
        date: "10/10/2022",
        time: "20:40",
        name: "John Doe",
    },
    {
        message: `amet lectus turpis. `,
        id: 0,
        date: "10/10/2022",
        time: "20:42",
        name: "John Doe",
    },
    {
        message: `Aliquam eu nisl pellentesque pellentesque libero quis, tempor nisi. 
    Donec vitae mattis libero. Mauris est ipsum,`,
        id: 1,
        date: "10/10/2022",
        time: "20:47",
        name: "John Smith",
    },
    {
        message: `vestibulum
    nec nibh quis, lacinia fringilla magna.`,
        id: 0,
        date: "10/10/2022",
        time: "20:50",
        name: "John Doe",
    },
    {
        message: `Donec maximus odio nec  sodales, id ornare 
    tortor tempor. Cras pellentesque lorem`,
        id: 1,
        date: "10/10/2022",
        time: "20:52",
        name: "John Smith",
    },
    {
        message: `sodales, id ornare 
    tortor tempor. Cras pellentesque lorem`,
        id: 1,
        date: "10/10/2022",
        time: "21:00",
        name: "John Smith",
    },
    {
        message: `amet lectus turpis. `,
        id: 0,
        date: "10/10/2022",
        time: "21:02",
        name: "John Doe",
    },
    {
        message: `tincidunt eleifend. Phasellus a finibus metus.   Proin nec lacus 
    ut odio euismod tincidunt necet lectus.`,
        id: 1,
        date: "10/10/2022",
        time: "21:10",
        name: "John Smith",
    },
];
//
//
const StyledChatDetailsSection = styled.section`
  padding-left: 20px;
  box-shadow: -15px 0px 10px -10px #e7e7e7;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 980px;
  list-style: none;
  max-height: 90vh;
`;
//
//
const StyledHeading = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(224 224 224);
  align-items: center;
  justify-content: space-between;
`;
//
//
const StyledMessagesSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: ${(props) => (props.own2 ? "flex-start" : "flex-end")};
  margin-right: ${(props) => (props.own2 ? "0px" : "10px")};
`;
const sender = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    borderRadius: "8px",
    listStyle: "none",
    rowGap: "2px",
    maxWidth: "450px",
};
const reciever = {
    backgroundColor: "#444791",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    listStyle: "none",
    rowGap: "2px",
    maxWidth: "450px",
    // overflow: "auto",
};
const StyledSenderDetails = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;
const StyledChatMessage = styled.div`
  display: flex;
`;
//
//

const StyledNewMessageForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  /* align-items: center; */
  /* align-content: center; */
  border-top: 1px solid rgb(224 224 224);
  column-gap: 10px;
`;

const Styledinput = styled.input`
  border: 0.5px solid grey;
  height: 2rem;
  width: 600px;
  padding: 0 3rem 0.1rem 1.2rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline: white;
  /* margin-top: 10px; */
`;
const StyledSendButton = styled.button`
  border: 1px solid gray;
  background: white;
  border-radius: 0.4rem;
  height: 2.2rem;
  color: gray;
  width: 4rem;
  /* align-items: center; */
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: #444791;
    color: white;
  }
  /* margin: 5px; */
`;

const Messages = () => {
    const prams = useParams();
    let obj = DUMMY_CONTACTS.find(
        (element) => element.userName === prams.contactId
    );
    if (obj) {
    } else {
        obj = DUMMY_CONTACTS[0];
    }
    const RenderChat = DUMMY_CHAT.map((singleMessage) => {
        return (
            <StyledMessagesSection own2={!!singleMessage.id}>
                <div
                    key={singleMessage.id}
                    style={singleMessage.id ? sender : reciever}
                    // own={!!singleMessage.id}
                >
                    <StyledSenderDetails>
                        {singleMessage.id ? (
                            <div style={{ fontWeight: "600" }}>{obj.name.toUpperCase()}</div>
                        ) : (
                            <></>
                        )}
                        <div style={{ fontSize: "small" }}>{singleMessage.date}</div>
                        <div style={{ fontSize: "small" }}>{singleMessage.time}</div>
                    </StyledSenderDetails>

                    <StyledChatMessage>
                        <div>{singleMessage.message}</div>
                    </StyledChatMessage>
                </div>
            </StyledMessagesSection>
        );
    });
    return (
        <StyledChatDetailsSection>
            <StyledHeading>
                <h2>{obj.name}</h2>
                <div>Call</div>
            </StyledHeading>
            <div
                style={{
                    overflow: "auto",
                    maxHeight: "40rem",
                    display: "flex",
                    flexDirection: "column-reverse",
                    rowGap: "20px",
                }}
            >
                {RenderChat.reverse()}
            </div>

            <StyledNewMessageForm>
                <Styledinput placeholder="Type new message"></Styledinput>
                <StyledSendButton>Send</StyledSendButton>
            </StyledNewMessageForm>
        </StyledChatDetailsSection>
    );
};
export default Messages;