const AnimatedGuess = (props: any) => {
    const { formattedAnswerArray, objToArrConversion, guess, answer } = props;

    return (
        <>
            {formattedAnswerArray.map((char: string, index: number) => {
                const guessArray: string[] = objToArrConversion(guess, answer);
                if (char === "|") {
                    return <br key={index} />
                }
                if (char === guessArray[index]) {
                    // console.log("CORRECT", index, char);
                    return <input
                        className="input-boxes-correct"
                        style={{ animationDelay: `${index * 0.5}s` }}
                        type="text"
                        key={index}
                        disabled
                        value={char}
                        maxLength={1}>
                    </input>;
                } else if (formattedAnswerArray.includes(guessArray[index])) {
                    // console.log("INCLUDES", index, guessArray[index]);
                    return <input
                        className="input-boxes-includes"
                        type="text"
                        key={index}
                        style={{ animationDelay: `${index * 0.5}s` }}
                        disabled
                        value={guessArray[index]}
                        maxLength={1}>
                    </input>;
                } else {
                    // console.log("WRONG VALUE", index, guessArray[index]);
                    return <input
                        className="input-boxes-incorrect"
                        type="text"
                        style={{ animationDelay: `${index * 0.5}s` }}
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