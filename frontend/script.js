const API_URL = "http://localhost:3000";

async function fetchStudents() {
  const response = await fetch(`${API_URL}/estudiantes`);
  const students = await response.json();
  renderStudents(students);
}

function renderStudents(students) {
  const list = document.getElementById("student-list");
  list.innerHTML = "";
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.nombre} ${student.apellido}`;
    list.appendChild(li);
  });
}

document.getElementById("add-student-btn").addEventListener("click", async () => {
  const nombre = prompt("Nombre del estudiante:");
  const apellido = prompt("Apellido del estudiante:");
  if (nombre && apellido) {
    await fetch(`${API_URL}/estudiantes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, apellido }),
    });
    fetchStudents();
  }
});

fetchStudents();
