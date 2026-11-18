import students from '../components/StudentProfile';

function Contact() {
    return (
        <div className="page">
            <h2>Student Contact Details</h2>

            {students.map(student => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Phone: {student.phone}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Contact;