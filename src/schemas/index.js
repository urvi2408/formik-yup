import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name:Yup.string()
            .min(2)
            .max(25)
            .required("please enter your name")
            .matches(/^[a-zA-Z\s]+$/ , 'Is not in correct format'),
    email:Yup.string()
             .email()
             .required("please enter your email address")
             .matches(/^\S+@\S+\.\S+$/ , 'Is not in correct format'),
    password:Yup.string()
                .min(8)
                .max(15)
                .required("please enter your password")
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/ , 'Is not in correct format'),
    confirm_password:Yup.string()
                        .required("please enter confirm password")
                        .oneOf([Yup.ref("password"),null],"please must match")
                        .matches(/^[a-zA-Z\s]+$/ , 'Is not in correct format'),
    number:Yup.string()
              .max(10)
              .required("please enter your mobile number")
              .matches(/^[7-9]\d{9}$/ , 'Is not in correct format'),
});