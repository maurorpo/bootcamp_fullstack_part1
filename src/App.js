import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div className="body_course">
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total1={part1.exercises} total2={part2.exercises} total3={part3.exercises} />
    </div>
  )
}

export default App;