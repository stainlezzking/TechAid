"use client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import Button from "./button";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { FetchAuthPost } from "@/lib/server";
import Input from "./input";

export default function AssignTicket({ id, currentUserEmail, assignedEmail, currentUserName }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [access, setAccess] = useState(assignedEmail == currentUserEmail);

  const assignTicketToSomeoneElse = async function () {
    if (!user.trim()) return;
    if (user.trim() == currentUserEmail) return toast("Cannot reassign ticket to yourself..");
    setIsSubmitting(true);
    const response = await FetchAuthPost(`/ticket/assignTicket`, { email: user, ticketId: id, name: currentUserName });
    if (response.unauthorized) {
      await signOut();
    }
    setIsSubmitting(false);
    onClose();
    toast(response.message, { position: "top-right" });
    // no engineer found with such email if user doesnt exist
    //block engineers from accessing ticket not assigned to them... to prove the reassgment
    if (response.success) {
      setAccess(false);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {!access && (
        <div className="backdrop-blur-sm bg-black/50 w-screen h-screen top-0 left-0 fixed flex items-center justify-center">
          <div className="shadow-md rounded-sm p-10 bg-white space-y-3">
            <span className="flex justify-center">
              <svg className="w-[100px]" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8e4343">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M18.1569 6.84315C21.281 9.96734 21.281 15.0327 18.1569 18.1569C15.0327 21.281 9.96734 21.281 6.84314 18.1569C3.71895 15.0327 3.71895 9.96734 6.84314 6.84315C9.96734 3.71895 15.0327 3.71895 18.1569 6.84315ZM18.1569 6.84315L6.84401 18.156"
                    stroke="#7f1a1a"
                    strokeWidth="1.2"
                  ></path>
                </g>
              </svg>
            </span>
            <h1 className="text-lg text-black">You dont have Access to this Ticket Anymore</h1>
            <p className="text-center text-sm">Go back to Dashboard</p>
            <a className="bg-primaryBlue hover:bg-primaryBlue/70 font-medium text-white rounded-md block w-full text-center py-3" href="/">
              Dashboard
            </a>
          </div>
        </div>
      )}
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
                <h2 className="text-xl font-semibold mb-4 cursor-pointer">Assign Ticket</h2>
                <div className="flex gap-x-2 items-center">
                  <label htmlFor="user">Engineer </label>
                  <Input className="grow" type="email" placeholder="email" value={user} onChange={(e) => setUser(e.target.value)} required />
                  {error ? <p>{error}</p> : null}
                </div>
                <Button onClick={assignTicketToSomeoneElse} className="mt-4 ml-auto px-4 py-2 w-[40%]">
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
