"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineShare } from "react-icons/hi";
import {
  WhatsappIcon,
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function ModalSocialMedia({ url, title }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        outline
        pill
        color="light"
        size="xs"
        onClick={() => setOpenModal(true)}
      >
        <HiOutlineShare fontSize="18px" />
      </Button>
      <Modal
        dismissible
        size="sm"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Share this article</Modal.Header>
        <Modal.Body>
          <div className="flex items-center justify-center gap-4">
            <WhatsappShareButton url={url} title={title} separator=":: ">
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            <FacebookShareButton url={url} quote={title} hashtag={"#foodhub"}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} quote={title}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <TelegramShareButton url={url} quote={title}>
              <TelegramIcon size={40} round />
            </TelegramShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
