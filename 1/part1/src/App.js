const App = () => {
  const course = "Half Stack application development";
  const part1 = { title: "Fundamentals of React", ex: 10 };
  const part2 = { title: "Using props to pass data", ex: 7 };
  const part3 = { title: "State of a component", ex: 14 };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part title={part1.title} ex={part1.ex} />
      <Part title={part2.title} ex={part2.ex} />
      <Part title={part3.title} ex={part3.ex} />
    </div>
  );
};

const Part = (part) => {
  return (
    <div>
      <p>
        {part.title} ({part.ex} exercises)
      </p>
    </div>
  );
};

const Total = ({ part1, part2, part3 }) => {
  return <p>Total exercises: {part1.ex + part2.ex + part3.ex}</p>;
};

export default App;
