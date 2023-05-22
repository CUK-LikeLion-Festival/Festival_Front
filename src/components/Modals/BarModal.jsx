import React from "react";
import styled from "styled-components";

const BarModal = (props) => {
  const { open } = props;

  return (
    <ModalContainer open={open}>
      {open && (
        <ModalSection>
          <ModalMain>{props.children}</ModalMain>
        </ModalSection>
      )}
    </ModalContainer>
  );
};

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
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 0.375rem;
  background-color: #ede0d3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: modal-show 0.3s;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 95%;
    max-width: 900px;
  }

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
`;

const ModalMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #d1d5db;
  border-bottom: 1px solid #d1d5db;
`;

export default BarModal;
