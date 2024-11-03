import { RegistrationFloat, TeacherRegistrationFloat } from "../js/registration.js";

const registrationFloat = new RegistrationFloat();
const teacherRegistrationFloat = new TeacherRegistrationFloat();

window.addEventListener("load", () => {
    registrationFloat.init();
    teacherRegistrationFloat.init();
});