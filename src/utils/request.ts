import { getInformation } from "./get-information";
import { completeWithChatGPT } from "./openai";

const requests: Record<string, { completion: string; pending: boolean }> = {};

export const getRequest = (requestId) => {
  return requests[requestId];
};

export const startRequest = (prompt: string) => {
  const requestId = Math.random().toString(36).substring(2, 15);
  requests[requestId] = {
    completion: "",
    pending: true,
  };

  completeWithChatGPT(
    `${getInformation(prompt)}`,
    (text) => {
      requests[requestId].completion = text;
    },
    () => {
      requests[requestId].pending = false;
    },
  );

  return requestId;
};
