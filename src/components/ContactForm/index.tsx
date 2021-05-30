import { Formik } from "formik";
import { useState } from "react";
import Loading from "../Loading";
import * as Yup from 'yup';

const INITIAL_VALUES = {
    name:'',
    email:'',
    description:'',
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Không được bỏ trống').min(2,vali => `Tối thiểu ${vali.min} chữ`).max(128,vali => `Tên dài tối đa ${vali.max} chữ`),
    email: Yup.string().email('Không đúng định dạng Email').required('Không được bỏ trống').min(2,min => `Tối thiểu ${min} chữ`).max(128,max => `Tên dài tối đa ${max} chữ`),
    description: Yup.string().min(100,vali => `Tối thiểu ${vali.min} chữ`).max(500,vali => `Tên dài tối đa ${vali.max} chữ`).required('Không được bỏ trống'),
});

export default function ContactForm() {
    const [isLoading,setIsLoading] = useState(false);

    const handleOnSubmit = (values:any,{resetForm}:any) => {
        setIsLoading(true);
        setTimeout(() => {
            // API CALLING goes here.
            setIsLoading(false);
        },2000);
    }

    return (
        <div className="contact-form">
            <div className="contact-form__wrapper">
                    <Formik initialValues={INITIAL_VALUES} onSubmit={handleOnSubmit} validationSchema={validationSchema}>
                        {({values,errors,touched,handleSubmit,handleChange,handleBlur}) => {
                            return (
                                <Loading isLoading={isLoading}>
                                    <form onSubmit={handleSubmit} className="contact-form__wrapper__the-form">
                                        <div className="contact-form__wrapper__the-form__split">
                                            <div className="form-group">
                                                <label className="label">Tên gọi {(errors['name'] && touched['name']) && <span className="form-error"> - {errors['name']}</span>}</label>
                                                <input
                                                    className="input"
                                                    type="name"
                                                    name="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Tên gọi"
                                                    value={values.name}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="label">Địa chỉ Email {(errors['email'] && touched['email']) && <span className="form-error"> - {errors['email']}</span>}</label>
                                                <input
                                                    className="input"
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder="Địa chỉ Email"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="label">Nội dung {(errors['description'] && touched['description']) && <span className="form-error"> - {errors['description']}</span>}</label>
                                            <textarea 
                                                className="input-textarea" 
                                                name="description" 
                                                onChange={handleChange} 
                                                onBlur={handleBlur}
                                                value={values.description}
                                                placeholder="Nội dung"
                                            ></textarea>
                                        </div>

                                        <button className="button" type="submit">Gửi đi</button>
                                    </form>
                                </Loading>
                            )
                        }}
                    </Formik>
                    <div className="contact-form__wrapper__notes">
                        hello
                    </div>

            </div>
        </div>
    );  
}