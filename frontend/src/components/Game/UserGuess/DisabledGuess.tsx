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
                            style={{ backgroundColor: "lightgrey", borderColor: "white", marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
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