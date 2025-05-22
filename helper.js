export const responseGenerator = (status, message, data) => {
  return {
    status,
    message,
    ...data,
  };
};
