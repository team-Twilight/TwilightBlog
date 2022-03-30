import { getAllNotes } from "../../../lib/noteApi";
import { PostType } from "../../../lib/postApi";

type PostIndexProps = {
    notes: {
        [x: string]: PostType[];
    };
};

const Index: React.FC<PostIndexProps> = ({ notes }) => {
    // console.log(Object.keys(notes));

    const dirSlugs: string[] = Object.keys(notes);

    // notes.get(keys[0]);
    return (
        <div>
            <h1>note index</h1>
            {dirSlugs.map((dirSlugs, idx) => {
                return (
                    <>
                        <h2 key={idx}>{dirSlugs}</h2>
                        <ol key={idx}>
                            {notes[dirSlugs].map((note, idx) => {
                                return <li key={idx}>{note.title}</li>;
                            })}
                        </ol>
                    </>
                );
            })}
        </div>
    );
};

export const getStaticProps = async () => {
    const notes = getAllNotes(["title", "slug"]);

    let keys = Array.from(notes.keys());

    let a: { [x: string]: PostType[] } = {};

    keys.map((key) => {
        a[key] = notes.get(key) || [];
    });

    return {
        props: {
            notes: a,
        },
    };
};

export default Index;
