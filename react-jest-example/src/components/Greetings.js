import { useState } from "react";

import Output from "./Output";

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed</Output>}
            <button onClick={changedTextHandler}> </button>
        </div>
    )
}

export default Greetings;