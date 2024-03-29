const SubmittedGuess = (props: any) => {
    const { formattedAnswerArray, previousGuess } = props;
    return (
        <>
            {formattedAnswerArray.map((char: string, index: number) => {
                if (char === "|") {
                    return <br key={index} />
                }
                if (char === previousGuess[index]) {
                    return <input
                        className="input-boxes-correct-no-anim"
                        style={{ marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
                        type="text"
                        key={index}
                        disabled
                        value={char}
                        maxLength={1}>
                    </input>;
                } else if (formattedAnswerArray.includes(previousGuess[index])) {
                    return <input
                        className="input-boxes-includes-no-anim"
                        style={{ marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
                        type="text"
                        key={index}
                        disabled
                        value={previousGuess[index]}
                        maxLength={1}>
                    </input>;
                } else {
                    return <input
                        className="input-boxes-incorrect-no-anim"
                        style={{ marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
                        type="text"
                        key={index}
                        disabled
                        value={previousGuess[index]}
                        maxLength={1}>
                    </input>;
                }
            })
            }
        </>
    );
}

export default SubmittedGuess;