import students from '../components/StudentProfile';

function Home() {
    return (
        <div className="page">
            <h1>Student Profiles</h1>

            <div className="cards">
                {students.map(student => (
                    <div className="card" key={student.id}>
                        <h2>{student.name}</h2>
                        <hr />
                        <p><b>Register No:</b> {student.regno}</p>
                        <p><b>Department:</b> {student.dept}</p>
                        <p><b>Year:</b> {student.year}</p>
                        <p><b>College:</b> ABC College</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;