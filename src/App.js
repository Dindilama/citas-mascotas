import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    petName: '',
    age: '',
    gender: '',
    appointmentDate: '',
    ownerName: '',
  });

  const [citas, setCitas] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newCita = { ...formData };
      setCitas([...citas, newCita]);
      setFormData({
        petName: '',
        age: '',
        gender: '',
        appointmentDate: '',
        ownerName: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.petName === '') {
      newErrors.petName = 'Nombre de mascota es requerido';
    }
    if (formData.age === '') {
      newErrors.age = 'Edad es requerida';
    }
    if (formData.gender === '') {
      newErrors.gender = 'Género es requerido';
    }
    if (formData.appointmentDate === '') {
      newErrors.appointmentDate = 'Día de la cita es requerido';
    }
    if (formData.ownerName === '') {
      newErrors.ownerName = 'Nombre del dueño es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="App">
      <h1>Formulario de Cita de Mascotas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />
          {errors.petName && <div className="error">{errors.petName}</div>}
        </div>
        <div>
          <label>Edad</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
        <div>
          <label>Género</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>
        <div>
          <label>Día de la cita</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
          {errors.appointmentDate && <div className="error">{errors.appointmentDate}</div>}
        </div>
        <div>
          <label>Nombre del dueño</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
          {errors.ownerName && <div className="error">{errors.ownerName}</div>}
        </div>
        <button type="submit">Agendar Cita</button>
      </form>
      <div>
        <h2>Citas Agendadas</h2>
        {citas.map((cita, index) => (
          <div key={index} className="cita-card">
            <p>Nombre Mascota: {cita.petName}</p>
            <p>Edad: {cita.age}</p>
            <p>Género: {cita.gender}</p>
            <p>Día de la cita: {cita.appointmentDate}</p>
            <p>Nombre del dueño: {cita.ownerName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


