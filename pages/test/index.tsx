import { getPostSlugs, postsDirectory } from "../../lib/postApi";

const Index = () => {
    return (
        <div>
            <h1>this is index of test dir</h1>
        </div>
    );
};

export const getServerSideProps = async () => {
    console.log(postsDirectory);
    console.log(getPostSlugs());
    return {
        props: {
            umm: "aaa",
        },
    };
};

export default Index;
