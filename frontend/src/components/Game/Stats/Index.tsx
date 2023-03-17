import StatsMain from "./StatsMain";

const Stats = (props: any) => {
    const { stats } = props;

    return (
        <>
            <StatsMain stats={stats} />
        </>
    );
}

export default Stats;