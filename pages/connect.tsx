import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
// ! inside the React Component

const Connect: FC = () => {
  const [decoded, setDecoded] = useState("hi");
  const [tok, setTok] = useState("hi");
  const router = useRouter();




 


  return <div>{decoded}</div>;
};

export default Connect;
