"use client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import Button from "./button";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { FetchAuthPut } from "@/lib/server";

export default function AssignTicket({ id, currentUserEmail }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const assignTicketToSomeoneElse = async function () {
    if (!note.trim()) return;
    setIsSubmitting(true);
    // const response = await FetchAuthPut(`/ticket/reassign`, { message: note });
    if (response.unauthorized) {
      await signOut();
    }
    setIsSubmitting(false);
    onClose();
    toast(response.message, { position: "top-right" });
    // no engineer found with such email if user doesnt exist
    //block engineers from accessing ticket not assigned to them... to prove the reassgment
    if (response.success) {
      window.location.href = window.location.href;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div onClick={onOpen}>Re-Assign</div>
      <Modal
        isOpen={isOpen}
        backdrop={"blur"}
        hideCloseButton={true}
        classNames={{
          backdrop: "backdrop-blur-sm bg-black/50",
        }}
        placement="center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: -20,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="max-w-[671px] h-auto rounded-lg bg-red-800 ">
          {(onClose) => (
            <>
              <div className="bg-white py-[25px] px-[41px] rounded-lg shadow-lg max-w-[671px] w-full">
                <span className="flex justify-end">
                  <svg
                    onClick={onClose}
                    className="w-6 cursor-pointer"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="3"
                    stroke="#000000"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
                      <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
                    </g>
                  </svg>
                </span>
                <h2 className="text-xl font-semibold mb-4">Assign Ticket</h2>
                <div className="flex gap-x-2">
                  <label htmlFor="user">Engineer </label>
                  <input type="email" placeholder="email" value={user} onChange={(e) => setUser(e.target.value)} required />
                  {error ? <p>{error}</p> : null}
                </div>
                <Button onClick={assignTicketToSomeoneElse} value={note} className="mt-4 ml-auto px-4 py-2 w-[40%]">
                  {submitting ? "Sending.." : "Send"}
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
