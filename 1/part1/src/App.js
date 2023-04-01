const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = (content) => {
  return (
    <div>
      <Part title={content.part1} ex={content.exercises1} />
      <Part title={content.part2} ex={content.exercises2} />
      <Part title={content.part3} ex={content.exercises3} />
    </div>
  );
};

const Part = (part) => {
  return (
    <div>
      <p>{part.title} ({part.ex} exercises)</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>;
};

export default App;
