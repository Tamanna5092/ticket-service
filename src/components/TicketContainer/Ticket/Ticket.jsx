import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export default function Ticket({ ticket, handleTicketCardAdd }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div
      onClick={() => handleTicketCardAdd(ticket)}
      className="card card-border bg-base-100 shadow-xl mx-4 md:mx-0 cursor-pointer"
    >
      <div className="card-body">
        <div className="flex justify-between">
          <p className="text-xl font-medium">{title}</p>
          <button
            className={`flex items-center gap-1 rounded-full px-4 py-2 ${status === "Open" ? "bg-[#B9F8CF] text-[#02A53B]" : status === "In-Progress" ? "bg-[#F8F3B9] text-[#9C7700]" : "bg-[#F8D7DA] text-[#F83044]"}`}
          >
            <span
              className={`text-sm ${status === "Open" ? "text-[#02A53B]" : status === "In-Progress" ? "text-[#FEBB0C]" : "text-[#F83044]"}`}
            >
              <FaCircle />
            </span>{" "}
            {status}
          </button>
        </div>
        <p className="text-[#627382] text-base my-3">{description}</p>
        <div className="flex justify-between ">
          <div className="flex flex-col md:flex-row space-x-3">
            <p className="text-sm text-[#627382] font-medium">#{id}</p>
            <p
              className={`${priority === "High" ? "text-[#F83044]" : priority === "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"} font-medium uppercase`}
            >
              {priority} priority
            </p>
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
