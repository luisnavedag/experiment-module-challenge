import Experiment from "./modules/experiment";
import useExperiments from "./useExperiments";

const initialExperiments = [
  {
    id: 1,
    title: "Experiment Module 1",
    status: "unlocked",
    iterations: [
      { id: 1, title: "Iteration 1", selection: "short" },
      { id: 2, title: "Iteration 2", selection: "medium" },
      { id: 3, title: "Iteration 3", selection: "long" },
    ],
  },
  {
    id: 2,
    title: "Experiment Module 2",
    status: "locked",
    iterations: [
      { id: 1, title: "Iteration 1", selection: "short" },
      { id: 2, title: "Iteration 2", selection: "medium" },
      { id: 3, title: "Iteration 3", selection: "long" },
    ],
  },
];

export default () => {
  const { experiments, updateExperiment } = useExperiments(initialExperiments);

  return (
    <>
      {experiments.map((experiment) => (
        <Experiment
          key={experiment.id}
          data={experiment}
          updateIterations={(newIterations) => {
            updateExperiment(experiment.id, newIterations);
          }}
        />
      ))}
    </>
  );
};
