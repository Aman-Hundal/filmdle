import SubmittedGuess from "./SubmittedGuess";
const DisabledGuess = (props: any) => {
    const { formattedAnswerArray, previousGuess } = props;
    
    return (
        <>
            {previousGuess ?
                <SubmittedGuess
                    formattedAnswerArray={formattedAnswerArray}
                    previousGuess={previousGuess} />
                : formattedAnswerArray.map((char: string, index: number) => {
                    if (char !== "|") {
                        return <input
                            className="input-boxes"
                            style={{ backgroundColor: "lightgrey", borderColor: "white" }}
                            type="text"
                            key={index}
                            disabled
                            value={""}
                            maxLength={1}>
                        </input>;
                    } else {
                        return <br key={index} />
                    }
                })}
        </>
    );
}

export default DisabledGuess;