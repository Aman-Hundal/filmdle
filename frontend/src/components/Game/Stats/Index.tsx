import { useState } from "react";
import StatsMain from "./StatsMain";


const Stats = (): any => {
    const [loading, setLoading]: any = useState(false);

    return (
        <>
            {!loading ?
                <StatsMain />
                : null}
        </>
    );
}

export default Stats;