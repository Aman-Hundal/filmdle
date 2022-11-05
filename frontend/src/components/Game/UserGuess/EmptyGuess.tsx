const EmptyGuess = (props: any) => {
    const { formattedAnswerArray, guess, setGuess, focusField } = props;
    return (
        <>
            {formattedAnswerArray.map((char: string, index: number) => {
                if (char !== "|") {
                    if (index === 0) {
                        return <input
                            className="input-boxes"
                            type="text"
                            autoFocus
                            key={index}
                            onChange={(event: any) => {
                                const newKey = guess[index] = event.target.value;
                                setGuess((prev: any) => ({ ...prev, newKey }));
                                console.log(guess);
                            }}
                            onKeyDown={(event: any) => {
                                // const newKey = guess[index] = event.target.value;
                                // setGuess((prev: any) => ({...prev, newKey}));
                                focusField(event)
                            }}
                            maxLength={1}>
                        </input>
                    }
                    return <input
                        className="input-boxes"
                        type="text"
                        key={index}
                        onChange={(event: any) => {
                            const newKey = guess[index] = event.target.value;
                            setGuess((prev: any) => ({ ...prev, newKey }));
                            console.log(guess);
                        }}
                        onKeyDown={(event: any) => {
                            // const newKey = guess[index] = event.target.value;
                            // setGuess((prev: any) => ({...prev, newKey}));
                            focusField(event)
                        }}
                        maxLength={1}>
                    </input>
                } else {
                    return <br key={index} />
                }
            })}
        </>
    )
}

export default EmptyGuess;