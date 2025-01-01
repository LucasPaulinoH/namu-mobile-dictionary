import { useEffect, useState } from "react";
import { Stats } from "types/stats";

import { StatsContext } from ".";

const StatsContextProvider = ({ children }: any) => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  return (
    <StatsContext.Provider value={{ stats, setStats }}>
      {children}
    </StatsContext.Provider>
  );
};

export default StatsContextProvider;