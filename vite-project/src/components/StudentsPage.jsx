// import React, { useEffect, useState } from "react";
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import "./styles.css";

// const StudentsPage = ({ db }) => {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [isViewMode, setIsViewMode] = useState(false); 
//   const [showModal, setShowModal] = useState(false);
//   const [newStudent, setNewStudent] = useState({
//     name: "",
//     class: "",
//     rollNumber: "",
//     section: "",
//     address: "",
//     father_name: "",
//     mother_name: "",
//     phone_no: "",
//     age: "",
//     height: "",
//     weight: "",
//     transport: "",
//   });

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     const querySnapshot = await getDocs(collection(db, "students"));
//     const studentsList = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setStudents(studentsList);
//   };

//   const handleAddStudent = async () => {
//     setSelectedStudent(null); 
//     if (!newStudent.name || !newStudent.class || !newStudent.rollNumber || !newStudent.section) {
//       alert("Please fill out all mandatory fields before saving.");
//       return;
//     }

//     await addDoc(collection(db, "students"), newStudent);
//     setShowModal(false);
//     resetStudentForm();
//     fetchStudents();
//   };

//   const handleEditStudent = async () => {
//     if (!newStudent.name || !newStudent.class || !newStudent.rollNumber || !newStudent.section) {
//       alert("Please fill out all mandatory fields before saving.");
//       return;
//     }

//     const studentRef = doc(db, "students", selectedStudent.id);
//     await updateDoc(studentRef, newStudent);
//     setShowModal(false);
//     setSelectedStudent(null); 
//     resetStudentForm();
//     fetchStudents();
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this student?");
//     if (!confirmDelete) return;

//     await deleteDoc(doc(db, "students", id));
//     fetchStudents();
//   };

//   const handleView = (id) => {
//     const student = students.find((student) => student.id === id);
//     setSelectedStudent(student);
//     setIsViewMode(true); 
//     setNewStudent(student); // fill the student data for viewing
//     setShowModal(true); // Show the modal
//   };

//   const handleEdit = (id) => {
//     const student = students.find((student) => student.id === id);
//     setSelectedStudent(student);
//     setNewStudent(student); // already filled form with student data
//     setIsViewMode(false); // change to Edit mode
//     setShowModal(true);
//   };

//   const resetStudentForm = () => {
//     setNewStudent({
//       name: "",
//       class: "",
//       rollNumber: "",
//       section: "",
//       address: "",
//       father_name: "",
//       mother_name: "",
//       phone_no: "",
//       age: "",
//       height: "",
//       weight: "",
//       transport: "",
//     });
//   };

//   return (
//     <div className="container">
//       <h2 className="text-2xl mb-4">Students Details :-</h2> <br /> <br />
//       <button
//         className="add-student-btn"
//         onClick={() => {
//           setSelectedStudent(null); // Clear selectedStudent
//           resetStudentForm(); // Reset form fields
//           setIsViewMode(false); // Ensure it's not in View mode
//           setShowModal(true); // Open modal
//         }}
//       >
//         Add Student
//       </button>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Class</th>
//             <th>Section</th>
//             <th>Roll Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.name}</td>
//               <td>{student.class}</td>
//               <td>{student.section}</td>
//               <td>{student.rollNumber}</td>
//               <td>
//                 <button onClick={() => handleView(student.id)}>View</button>
//                 <button onClick={() => handleEdit(student.id)}>Edit</button>
//                 <button className="red" onClick={() => handleDelete(student.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal to Add/View/Edit Student info */}
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3>{isViewMode ? "View Student" : selectedStudent ? "Edit Student" : "Add New Student"}</h3>
//             <div className="form-container">
//               {Object.keys(newStudent).map((key) => (
//                 <div className="form-group" key={key}>
//                   <label>{key.replace("_", " ").toUpperCase()}</label>
//                   <input
//                     type="text"
//                     value={newStudent[key]}
//                     onChange={(e) =>
//                       !isViewMode && setNewStudent({ ...newStudent, [key]: e.target.value })
//                     }
//                     readOnly={isViewMode} // Disable input if in View mode
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="modal-buttons">
//               <button className="cancel" onClick={() => setShowModal(false)}>
//                 Close
//               </button>
//               {!isViewMode && (
//                 <button onClick={selectedStudent ? handleEditStudent : handleAddStudent}>
//                   {selectedStudent ? "Save Changes" : "Save"}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentsPage;











// import React, { useEffect, useState } from "react";
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import "./styles.css";

// const StudentsPage = ({ db }) => {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [isViewMode, setIsViewMode] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [newStudent, setNewStudent] = useState({
//     name: "",
//     class: "",
//     rollNumber: "",
//     section: "",
//     address: "",
//     father_name: "",
//     mother_name: "",
//     phone_no: "",
//     age: "",
//     height: "",
//     weight: "",
//     transport: "",
//   });

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     const querySnapshot = await getDocs(collection(db, "students"));
//     const studentsList = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setStudents(studentsList);
//   };

//   const handleAddStudent = async () => {
//     setSelectedStudent(null);
//     if (!newStudent.name || !newStudent.class || !newStudent.rollNumber || !newStudent.section) {
//       alert("Please fill out all mandatory fields before saving.");
//       return;
//     }

//     await addDoc(collection(db, "students"), newStudent);
//     setShowModal(false);
//     resetStudentForm();
//     fetchStudents();
//   };

//   const handleEditStudent = async () => {
//     if (!newStudent.name || !newStudent.class || !newStudent.rollNumber || !newStudent.section) {
//       alert("Please fill out all mandatory fields before saving.");
//       return;
//     }

//     const studentRef = doc(db, "students", selectedStudent.id);
//     await updateDoc(studentRef, newStudent);
//     setShowModal(false);
//     setSelectedStudent(null);
//     resetStudentForm();
//     fetchStudents();
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this student?");
//     if (!confirmDelete) return;

//     await deleteDoc(doc(db, "students", id));
//     fetchStudents();
//   };

//   const handleView = (id) => {
//     const student = students.find((student) => student.id === id);
//     setSelectedStudent(student);
//     setIsViewMode(true);
//     setNewStudent(student);
//     setShowModal(true);
//   };

//   const handleEdit = (id) => {
//     const student = students.find((student) => student.id === id);
//     setSelectedStudent(student);
//     setNewStudent(student);
//     setIsViewMode(false);
//     setShowModal(true);
//   };

//   const resetStudentForm = () => {
//     setNewStudent({
//       name: "",
//       class: "",
//       rollNumber: "",
//       section: "",
//       address: "",
//       father_name: "",
//       mother_name: "",
//       phone_no: "",
//       age: "",
//       height: "",
//       weight: "",
//       transport: "",
//     });
//   };

//   return (
//     <div className="students-page">
//       <div className="header">
//         <h1>Students</h1>
//         <button className="new-student-btn" onClick={() => {
//           setSelectedStudent(null);
//           resetStudentForm();
//           setIsViewMode(false);
//           setShowModal(true);
//         }}>+ New Student</button>
//       </div>

//       <div className="search-container">
//         <input type="text" placeholder="Search students..." />
//         <button className="filter-btn">Filter</button>
//       </div>

//       <table className="students-table">
//         <thead>
//           <tr>
//             <th>
//               <input type="checkbox" />
//             </th>
//             <th>Name</th>
//             <th>Class</th>
//             <th>Section</th>
//             <th>Roll Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>
//                 <input type="checkbox" />
//               </td>
//               <td>{student.name}</td>
//               <td>{student.class}</td>
//               <td>{student.section}</td>
//               <td>{student.rollNumber}</td>
//               <td>
//                 <button onClick={() => handleView(student.id)}id="green">View</button>
//                 <button onClick={() => handleEdit(student.id)}id="blue">Edit</button>
//                 <button className="delete-btn" onClick={() => handleDelete(student.id)} id="red">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{isViewMode ? "View Student" : selectedStudent ? "Edit Student" : "Add Student"}</h2>
//             <form className="student-form">
//               {Object.keys(newStudent).map((key) => (
//                 <div className="form-group" key={key}>
//                   <label>{key.replace("_", " ").toUpperCase()}</label>
//                   <input
//                     type="text"
//                     value={newStudent[key]}
//                     onChange={(e) => !isViewMode && setNewStudent({ ...newStudent, [key]: e.target.value })}
//                     readOnly={isViewMode}
//                   />
//                 </div>
//               ))}
//             </form>
//             <div className="modal-buttons">
//               <button onClick={() => setShowModal(false)}>Close</button>
//               {!isViewMode && (
//                 <button onClick={selectedStudent ? handleEditStudent : handleAddStudent}>
//                   {selectedStudent ? "Save Changes" : "Save"}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentsPage;












import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import "./styles.css";

const StudentsPage = ({ db }) => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isViewMode, setIsViewMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
    rollNumber: "",
    section: "",
    address: "",
    father_name: "",
    mother_name: "",
    phone_no: "",
    age: "",
    height: "",
    weight: "",
    transport: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, students]);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const studentsList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudents(studentsList);
    setFilteredStudents(studentsList);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((student) =>
        Object.values(student)
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  };

  const handleAddStudent = async () => {
    setSelectedStudent(null);
    if (!newStudent.name || !newStudent.class || !newStudent.rollNumber || !newStudent.section) {
      alert("Please fill out all mandatory fields before saving.");
      return;
    }

    await addDoc(collection(db, "students"), newStudent);
    setShowModal(false);
    resetStudentForm();
    fetchStudents();
  };

  const handleEditStudent = async () => {
    if (!newStudent.name || !newStudent.class || !newStudent.rollNumber || !newStudent.section) {
      alert("Please fill out all mandatory fields before saving.");
      return;
    }

    const studentRef = doc(db, "students", selectedStudent.id);
    await updateDoc(studentRef, newStudent);
    setShowModal(false);
    setSelectedStudent(null);
    resetStudentForm();
    fetchStudents();
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };

  const handleView = (id) => {
    const student = students.find((student) => student.id === id);
    setSelectedStudent(student);
    setIsViewMode(true);
    setNewStudent(student);
    setShowModal(true);
  };

  const handleEdit = (id) => {
    const student = students.find((student) => student.id === id);
    setSelectedStudent(student);
    setNewStudent(student);
    setIsViewMode(false);
    setShowModal(true);
  };

  const resetStudentForm = () => {
    setNewStudent({
      name: "",
      class: "",
      rollNumber: "",
      section: "",
      address: "",
      father_name: "",
      mother_name: "",
      phone_no: "",
      age: "",
      height: "",
      weight: "",
      transport: "",
    });
  };

  return (
    <div className="students-page">
      <div className="header">
        <h1>Students</h1>
        <button
          className="new-student-btn"
          onClick={() => {
            setSelectedStudent(null);
            resetStudentForm();
            setIsViewMode(false);
            setShowModal(true);
          }}
        >
          + New Student
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="filter-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <table className="students-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <button onClick={() => handleView(student.id)} id="green">
                  View
                </button>
                <button onClick={() => handleEdit(student.id)} id="blue">
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(student.id)} id="red">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isViewMode ? "View Student" : selectedStudent ? "Edit Student" : "Add Student"}</h2>
            <form className="student-form">
              {Object.keys(newStudent).map((key) => (
                <div className="form-group" key={key}>
                  <label>{key.replace("_", " ").toUpperCase()}</label>
                  <input
                    type="text"
                    value={newStudent[key]}
                    onChange={(e) => !isViewMode && setNewStudent({ ...newStudent, [key]: e.target.value })}
                    readOnly={isViewMode}
                  />
                </div>
              ))}
            </form>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)} id="black" >Close</button>
              {!isViewMode && (
                <button onClick={selectedStudent ? handleEditStudent : handleAddStudent} id="dark">
                  {selectedStudent ? "Save Changes" : "Save" }
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
