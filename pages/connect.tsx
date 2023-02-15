import React, { FC } from 'react';
import { useRouter } from 'next/router'

// ! inside the React Component 


const Connect: FC= () => {
    const router = useRouter()
console.log(router.query.token);

  return <div>
    "HI"
    </div>;
};

export default Connect;
