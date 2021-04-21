import { useSelector } from "react-redux";
import { allNotes } from "../app/notes";

export default function Note() {
    const notes = useSelector(allNotes)

    return (
        <>
            <h1>Note pad</h1>
        </>
    )
}