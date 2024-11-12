import { ErrorResponseProps } from "@/types/error.types";

export const ErrorResponse = ({ status, message }: ErrorResponseProps) => {
  return {
    status: status,
    message: message,
  };
};
