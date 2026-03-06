import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function Ticket({ ticket, handleTicketCardAdd }) {
  // console.log( "ticket", ticket);
  const { title, description, customer, priority, status, createdAt } = ticket;
  return (
    <div onClick={() => handleTicketCardAdd(ticket)} className="card card-border bg-base-100 shadow-xl mx-4 md:mx-0 cursor-pointer">
      <div className="card-body">
        <div className="flex justify-between">
          <p className="text-xl font-medium">{title}</p>
          <button className="flex items-center gap-1 bg-[#B9F8CF] rounded-full px-4 py-2">
            <span className="text-[#02A53B]">
              <FaCircle />
            </span>{" "}
            {status}
          </button>
        </div>
        <p className="text-[#627382] text-base my-3">{description}</p>
        <div className="flex justify-between ">
          <div className="flex flex-col md:flex-row space-x-3">
            <p className="text-sm text-[#627382] font-medium">#1001</p>
            <p className="text-[#F83044] font-medium uppercase">{priority}</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-3 text-[#627382]">
            <p>{customer}</p>
            <p className="flex items-center">
              <span>
                <MdDateRange />
              </span>{" "}
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
