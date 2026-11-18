import students from '../components/StudentProfile';

function Home() {
    return (
        <div className="page">
            <h2>This is My Student Profile</h2>

            <div className="cards">
                {students.map(student => (
                    <div className="card" key={student.id}>
                        <h4>MSAJCE COLLEGE</h4>
                        <h3>Student ID Card</h3>
                        <hr />
                        <p>Name: {student.name}</p>
                        <p>Register No: {student.regno}</p>
                        <p>Year: {student.year}</p>
                        <p>Department: {student.dept}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;