import students from '../components/StudentProfile';

function About() {
    return (
        <div>
            <h1>About Students</h1>

            {students.map(student => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Department: {student.dept}</p>
                    <p>Year: {student.year}</p>
                </div>
            ))}
        </div>
    );
}

export default About;