import Bar from "./Bar";
import Legend from "./Legend";

const Stats = ({ data }) => {
  const getTotalDataPoints = () => {
    const reducer = (acc, current) => acc + current;
    if (
      data &&
      data.hasOwnProperty("answers") &&
      Object.values(data.answers).length
    )
      return Object.values(data.answers).reduce(reducer);
    return null;
  };

  return (
    <>
      <Bar
        total={getTotalDataPoints()}
        data={data}
        hexColors={data ? data.hexColors : null}
      />
      <Legend data={data} hexColors={data ? data.hexColors : null} />
    </>
  );
};

export default Stats;
