import students from '../components/StudentProfile';

function Contact() {
    return (
        <div>
            <h1>Student Contacts</h1>

            {students.map(student => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Phone: {student.phone}</p>
                </div>
            ))}
        </div>
    );
}

export default Contact;