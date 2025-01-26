import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const StudentsPage = ({ db }) => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
    rollNumber: "",
    section: "",
  });

  // Fetch students from Firestore
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const studentsList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudents(studentsList);
  };

  // Add new student to Firestore
  const handleAddStudent = async () => {
    if (
      !newStudent.name ||
      !newStudent.class ||
      !newStudent.rollNumber ||
      !newStudent.section
    ) {
      alert("Please fill out all fields before saving.");
      return;
    }

    await addDoc(collection(db, "students"), newStudent);
    setShowModal(false);
    setNewStudent({ name: "", class: "", rollNumber: "", section: "" });
    fetchStudents(); // Refresh the student list
  };

  // Delete student from Firestore
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "students", id));
    fetchStudents(); // Refresh the student list
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Students</h2>
      <button
        className="mb-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={() => setShowModal(true)}
      >
        Add Student
      </button>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Class</th>
            <th className="border px-4 py-2">Section</th>
            <th className="border px-4 py-2">Roll Number</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.class}</td>
              <td className="border px-4 py-2">{student.section}</td>
              <td className="border px-4 py-2">{student.rollNumber}</td>
              <td className="border px-4 py-2">
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="text-lg mb-4">Add New Student</h3>
            <input
              type="text"
              placeholder="Name"
              value={newStudent.name}
              className="w-full border mb-2 p-2"
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Class"
              value={newStudent.class}
              className="w-full border mb-2 p-2"
              onChange={(e) =>
                setNewStudent({ ...newStudent, class: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Section"
              value={newStudent.section}
              className="w-full border mb-2 p-2"
              onChange={(e) =>
                setNewStudent({ ...newStudent, section: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Roll Number"
              value={newStudent.rollNumber}
              className="w-full border mb-2 p-2"
              onChange={(e) =>
                setNewStudent({ ...newStudent, rollNumber: e.target.value })
              }
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleAddStudent}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
