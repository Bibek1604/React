
import './App.css'
import Card  from './component/card'
// import Student from './component/student'
 

function App (){


return (

  <>
  <h1 className='bg-green-400  text-black  p-4-rounded-xl mb-4'>Playing with react</h1>
  <Card username="hero" desc="Practising js and tailwind for working in company"  btn="Follow Me !" />
  <Card username="ladydon" desc="one lady army of office"  btn="Dangerzone"/>

  <Card username="zero" desc="don't know anything"  btn="Do you know!"/>

  <Card username="SB" desc="attractive girl of class"  btn="Accept her!" />


  </>
  
)


}

export default App

