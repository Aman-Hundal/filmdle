const AnimatedGuess = (props: any) => {
    const { formattedAnswerArray, objToArrConversion, guess, answer } = props;

    //Local Variables
    let timer = -1;

    return (
        <>
            {formattedAnswerArray.map((char: string, index: number) => {
                const guessArray: string[] = objToArrConversion(guess, answer);
                if (char === "|") {
                    return <br key={index} />
                }
                if (char === guessArray[index]) {
                    // console.log("CORRECT", index, char);
                    timer++;
                    return <input
                        className="input-boxes-correct"
                        style={{ animationDelay: `${timer * 0.3}s`, marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
                        type="text"
                        key={index}
                        disabled
                        value={char}
                        maxLength={1}>
                    </input>;
                } else if (formattedAnswerArray.includes(guessArray[index])) {
                    // console.log("INCLUDES", index, guessArray[index]);
                    timer++;
                    return <input
                        className="input-boxes-includes"
                        type="text"
                        key={index}
                        style={{ animationDelay: `${timer * 0.3}s`, marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
                        disabled
                        value={guessArray[index]}
                        maxLength={1}>
                    </input>;
                } else {
                    // console.log("WRONG VALUE", index, guessArray[index]);
                    timer++;
                    return <input
                        className="input-boxes-incorrect"
                        type="text"
                        style={{ animationDelay: `${timer * 0.3}s`, marginRight: index === formattedAnswerArray.length - 1 ? "4px" : "0px" }}
                        key={index}
                        disabled
                        value={guessArray[index]}
                        maxLength={1} >
                    </input>;
                }
            })}
        </>
    );
}

export default AnimatedGuess;