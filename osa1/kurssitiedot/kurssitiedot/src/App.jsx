
const App = () => {
 
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Content = () => {
    return (
      <div>
        <Part name={part1} numberOfEx={exercises1}/>
        <Part name={part2} numberOfEx={exercises2}/>
        <Part name={part3} numberOfEx={exercises3}/>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.numberOfEx}
      </p>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    )
  }



  return (  
    <>
      <Header course={course} />
      <Content/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </>
    
  )
}

export default App