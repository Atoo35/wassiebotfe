import React, { FC, useState } from 'react';
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken';
// ! inside the React Component 


const Connect: FC= () => {
 
  const [decoded, setDecoded] = useState("hi");
    const router = useRouter()
    const token = router.query.token as string;
    const JWT_KEY = 'KEYY' as string;

    // Verify and decode the JWT token
try {
  const decodedt = jwt.verify(token, JWT_KEY);
  setDecoded(decodedt as string)
  console.log(decodedt);
} catch (error) {
  console.error(error);
}

  return <div>
    {decoded}
    </div>;
};

export default Connect;
