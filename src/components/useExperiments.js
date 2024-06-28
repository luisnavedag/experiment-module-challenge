import { useState } from "react";

const useExperiments = (initialExperiments) => {
  const [experiments, setExperiments] = useState(initialExperiments);

  const updateExperiment = (experimentId, updatedIteration) => {
    setExperiments((prevExperiments) =>
      prevExperiments.map((experiment) =>
        experiment.id === experimentId
          ? {
              ...experiment,
              iterations: experiments
                .find((experiment) => experiment.id === experimentId)
                .iterations.map((iteration) =>
                  iteration.id === updatedIteration.id
                    ? updatedIteration
                    : iteration
                ),
            }
          : experiment
      )
    );
  };

  return { experiments, setExperiments, updateExperiment };
};

export default useExperiments;
