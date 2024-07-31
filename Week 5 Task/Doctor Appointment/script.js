document.addEventListener("DOMContentLoaded", () => {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', availability: {
            Monday: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
            Tuesday: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00']
        }},
        { id: 2, name: 'Dr. Jane Smith', availability: {
            Wednesday: ['10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00'],
            Thursday: ['10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00']
        }},
        { id: 3, name: 'Dr. Michael Johnson', availability: {
            Friday: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
            Saturday: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00']
        }}
    ];

    const appointments = [];

    function displayDoctors() {
        const doctorsList = document.getElementById('doctors-list');
        doctorsList.innerHTML = '';
        doctors.forEach(doctor => {
            const doctorDiv = document.createElement('div');
            doctorDiv.classList.add('doctor-card');
            doctorDiv.innerHTML = `
                <h3>${doctor.name}</h3>
                <p>Available Days: ${Object.keys(doctor.availability).join(', ')}</p>
                <p>Available Slots:</p>
                ${Object.keys(doctor.availability).map(day => `
                    <div class="availability-day">
                        <strong>${day}</strong>
                        ${doctor.availability[day].map(slot => `
                            <span class="slot" id="slot-${doctor.id}-${day}-${slot}">${slot}</span>
                        `).join('')}
                    </div>
                `).join('')}
            `;
            doctorsList.appendChild(doctorDiv);
        });
    }

    function displayAppointments() {
        const appointmentsList = document.getElementById('appointments-list');
        appointmentsList.innerHTML = '';
        appointments.forEach(appointment => {
            const appointmentDiv = document.createElement('div');
            appointmentDiv.classList.add('appointment-item');
            appointmentDiv.innerHTML = `
                <p><strong>ID:</strong> ${appointment.id}</p>
                <p><strong>Patient:</strong> ${appointment.patient}</p>
                <p><strong>Doctor:</strong> ${appointment.doctor}</p>
                <p><strong>Date:</strong> ${appointment.date}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
            `;
            appointmentsList.appendChild(appointmentDiv);
        });
    }

    function populateDoctorSelection() {
        const doctorSelect = document.getElementById('doctor-selection');
        doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
        doctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = doctor.name;
            doctorSelect.appendChild(option);
        });
    }

    function populateTimeSelection(doctorId, day) {
        const timeSelect = document.getElementById('appointment-time');
        timeSelect.innerHTML = '<option value="">Select Time</option>';
        const doctor = doctors.find(d => d.id === doctorId);
        if (doctor && doctor.availability[day]) {
            doctor.availability[day].forEach(slot => {
                const option = document.createElement('option');
                option.value = slot;
                option.textContent = slot;
                timeSelect.appendChild(option);
            });
        }
    }

    function isSlotAvailable(slot, currentDate) {
        const [slotHour, slotMinute] = slot.split(':').map(Number);
        const slotDate = new Date(currentDate);
        slotDate.setHours(slotHour, slotMinute, 0, 0);

        return slotDate >= new Date(); // Compare with current date/time
    }

    function getAppointmentId(date) {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const count = appointments.filter(app => app.id.startsWith(`${month}-${year}`)).length + 1;
        return `${month}-${year}-${count}`;
    }

    function bookAppointment(patient, doctorId, date, time) {
        const doctor = doctors.find(d => d.id === doctorId);
        if (!doctor) return alert('Doctor not found');

        const selectedDate = new Date(date);
        const dayName = getDayName(selectedDate);

        if (!doctor.availability[dayName]) {
            return alert('Doctor is not available on the selected date');
        }

        if (!doctor.availability[dayName].includes(time)) {
            return alert('Selected time slot is not available on the selected date');
        }

        if (!isSlotAvailable(time, selectedDate)) {
            return alert('Selected slot is in the past');
        }

        const slotElement = document.getElementById(`slot-${doctorId}-${dayName}-${time}`);
        if (slotElement && !slotElement.classList.contains('booked')) {
            const appointmentId = getAppointmentId(selectedDate);
            appointments.push({ id: appointmentId, patient, doctor: doctor.name, date, time });
            slotElement.classList.add('booked');
            displayAppointments();
            alert('Appointment booked successfully!');
        } else {
            alert('Selected time slot is not available!');
        }
    }

    function cancelAppointment(appointmentId) {
        const appointmentIndex = appointments.findIndex(app => app.id === appointmentId);
        if (appointmentIndex !== -1) {
            const appointment = appointments[appointmentIndex];
            const doctor = doctors.find(d => d.name === appointment.doctor);
            const selectedDate = new Date(appointment.date);
            const dayName = getDayName(selectedDate);
            const slotElement = document.getElementById(`slot-${doctor.id}-${dayName}-${appointment.time}`);
            if (slotElement) {
                slotElement.classList.remove('booked');
            }
            appointments.splice(appointmentIndex, 1);
            displayAppointments();
            alert('Appointment canceled successfully!');
        } else {
            alert('Appointment ID not found!');
        }
    }

    function getDayName(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    document.getElementById('booking-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const patientName = document.getElementById('patient-name').value;
        const doctorId = parseInt(document.getElementById('doctor-selection').value);
        const date = document.getElementById('appointment-date').value;
        const time = document.getElementById('appointment-time').value;
        bookAppointment(patientName, doctorId, date, time);
    });

    document.getElementById('cancellation-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const appointmentId = document.getElementById('appointment-id').value;
        cancelAppointment(appointmentId);
    });

    document.getElementById('doctor-selection').addEventListener('change', (event) => {
        const doctorId = parseInt(event.target.value);
        const selectedDate = document.getElementById('appointment-date').value;
        const day = getDayName(new Date(selectedDate));
        populateTimeSelection(doctorId, day);
    });

    document.getElementById('appointment-date').addEventListener('change', (event) => {
        const doctorId = parseInt(document.getElementById('doctor-selection').value);
        const selectedDate = event.target.value;
        const day = getDayName(new Date(selectedDate));
        populateTimeSelection(doctorId, day);
    });

    document.getElementById('view-appointments-btn').addEventListener('click', () => {
        displayAppointments();
    });

    displayDoctors();
    populateDoctorSelection();
});
