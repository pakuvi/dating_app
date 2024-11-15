import jwt from "jsonwebtoken";
export const TokenMaker = (id: string, email: string) => {
  const token = jwt.sign(
    {
      id,
      email,
    },
    "secret",
    { expiresIn: "30d" }
  );
  return token;
};

export const TokenVerify = (token: string) => {
  const decoded = jwt.verify(token, "secret");
  return decoded;
};
