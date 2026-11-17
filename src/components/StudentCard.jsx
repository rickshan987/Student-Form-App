function StudentCard({ student }) {
    return (
        <div className="student-card">
            <div className="card-header">
                <h3>{student.name}</h3>
                <span className="year-badge">{student.year}</span>
            </div>
            <div className="card-body">
                <p className="card-field"><strong>Department:</strong> {student.dept}</p>
                <p className="card-field"><strong>Email:</strong> {student.email}</p>
                <p className="card-field"><strong>Phone:</strong> {student.phone}</p>
                <p className="card-field"><strong>Address:</strong> {student.address}</p>
                <p className="card-field"><strong>GPA:</strong> <span className="gpa">{student.gpa}</span></p>
                <p className="card-field"><strong>Skills:</strong> {student.skills}</p>
                <p className="card-field"><strong>Enrolled:</strong> {student.enrollmentDate}</p>
            </div>
        </div>
    );
}
export default StudentCard;