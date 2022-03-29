import { useRouter } from "next/router";
import React from "react";

//@ts-ignore
const Notes: React.FC = ({}) => {
    const router = useRouter();
    //@ts-ignore
    const slug: string[] = router.query.slug || [];
    console.log(slug);
    return (
        <div>
            <h1>note index sss</h1>
            {slug.map((str, idx) => {
                return <h2 key={idx}>{str}</h2>;
            })}
        </div>
    );
};

export default Notes;
