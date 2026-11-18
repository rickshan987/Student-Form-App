import students from '../components/StudentProfile';

function About() {
    return (
        <div className="page">
            <h2>About Students</h2>

            {students.map(student => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Register No: {student.regno}</p>
                    <p>Department: {student.dept}</p>
                    <p>Year: {student.year}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default About;