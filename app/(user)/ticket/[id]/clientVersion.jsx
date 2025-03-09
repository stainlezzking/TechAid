"use client";

import Box from "@/components/box";
import AddMessage from "@/components/addMessage";
import { useState } from "react";

const ClientTicketPage = function ({ id, notes: passedNotes, userId }) {
  const [notes, setNotes] = useState([...passedNotes.reverse()]);

  const updateNote = function (notes) {
    setNotes(notes);
  };
  return (
    <>
      <div className="border-b border-black w-full">In-App Messages</div>
      {notes.map((note) => {
        return (
          <div className="pt-[16px]" key={note._id}>
            <Box className="flex flex-col p-[24px]">
              <span className="font-bold pb-[8px]">Note From:{userId == note.id ? "You" : note.name}</span>
              <span style={{ whiteSpace: "pre-line" }} className="pb-[20px]">
                {note.message}
              </span>
            </Box>
          </div>
        );
      })}

      <div className="py-[18px]">
        <AddMessage id={id} updateNote={updateNote} />
      </div>
    </>
  );
};

export default ClientTicketPage;
