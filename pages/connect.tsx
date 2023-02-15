import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
// ! inside the React Component

const Connect: FC = () => {
  const [decoded, setDecoded] = useState("hi");
  const router = useRouter();
  const token = router.query.token as string;
  const JWT_KEY = "KEY" as string;

  // Verify and decode the JWT token
  try {
    console.log("token", token);
    console.log("key", JWT_KEY);
    const decodedt = jwt.verify(token, JWT_KEY);
    console.log("decoded", decodedt);
    setDecoded(decodedt as string);
    console.log(decodedt);
  } catch (error) {
    console.error(error);
  }

  return <div>{decoded}</div>;
};

export default Connect;
