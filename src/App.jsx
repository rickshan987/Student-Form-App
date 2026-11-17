import Navbar from './components/Navbar';
import StudentProfile from './components/StudentProfile';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
     <StudentProfile name='rahul' dept='cse' year='3rd' />
     <StudentProfile name='rickshan' dept='ece' year='2nd' />
     <StudentProfile name='jack' dept='IT' year='2nd' />
     <StudentProfile name='kadir' dept='Mech' year='1st' />
    </>
  )
}
export default App