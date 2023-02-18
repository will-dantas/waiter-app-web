import { ReactElement } from "react";
import { AiOutlineFileText as RequestWaiteIcon } from "react-icons/ai";
import { AiOutlineFileSync as RequestProductionIcon } from "react-icons/ai";
import { AiOutlineFileDone as RequestDoneIcon } from "react-icons/ai";

export const IconsRequests = (status: string): ReactElement => {
  switch (status) {
    case "IN_PRODUCTION":
      return <RequestProductionIcon color="#D73035" fontSize="1.3rem" />;
    case "DONE":
      return <RequestDoneIcon color="#D73035" fontSize="1.3rem" />;
    default:
      return <RequestWaiteIcon color="#D73035" fontSize="1.3rem" />;
  }
};
