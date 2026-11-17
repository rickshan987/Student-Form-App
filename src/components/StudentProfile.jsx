function StudentProfile ({name,dept,year}) {
    return (
        <div className="student-card">
            <h2>Student_Profile</h2>
            <p>Name: {name}</p>
            <p>Department: {dept}</p>
            <p>Year: {year}</p>
        </div>   
     );
}

export default StudentProfile;