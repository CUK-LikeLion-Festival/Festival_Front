import React from "react";
import styled from "styled-components";


const ModalContainer = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  ${({ open }) => (open ? "display: flex;" : "display: none;")}
`;

const ModalSection = styled.section`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 0.375rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: modal-show 0.3s;

  @keyframes modal-show {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 350px) and (max-width: 720px) {
    width: 95%;
    max-width: 600px;
  }
`;

const ModalHeader = styled.header`
  position: relative;
  padding: 0.5rem 1rem;
  background-color: #e5e7eb;
  font-weight: bold;
  text-align: center;
`;



const ModalMain = styled.main`
  padding: 1rem;
  text-align: center; 
  border-top: 1px solid #d1d5db;
  border-bottom: 1px solid #d1d5db;
`;

const ModalFooter = styled.footer`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: white;
  background-color: gray;
  border-radius: 0.25rem;
`;

const BarModal = (props) => {
  const { open, close, header, closeButton } = props;

  return (
    <ModalContainer open={open}>
      {open && (
        <ModalSection>
          <ModalHeader>{header}</ModalHeader>
          <ModalMain>{props.children}</ModalMain>
          <ModalFooter>
            <Button onClick={close}>{closeButton}</Button>
          </ModalFooter>
        </ModalSection>
      )}
    </ModalContainer>
  );
};

export default BarModal;