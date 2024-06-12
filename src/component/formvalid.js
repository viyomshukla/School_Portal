import * as Yup from 'yup';
const FormValid=Yup.object({
    name:Yup.string().max(20).min(5).required("nameis necessary"),
    Rollno:Yup.number().max(100).min(1).required("roll no is necessary"),
    phone:Yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("phone number is necessary"),
    marks:Yup.number().max(100).min(0).required("marks is necessary"),
});
export default FormValid;