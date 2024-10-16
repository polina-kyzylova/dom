import React from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import * as S from "../../global";

interface BaseModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  handleClose: () => void;
}

const ModalCard = styled.div`
  ${S.BaseCard}

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
`;

const ModalTitle = styled(S.Title)`
  align-self: center;
`;

export default function BaseModal({
  open,
  handleClose,
  title,
  children,
}: BaseModalProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalCard>
        <ModalTitle>{title}</ModalTitle>
        <div>{children}</div>
      </ModalCard>
    </Modal>
  );
}
