import { Formik } from "formik";

const INITIAL_VALUES = {
    name:'',
    email:'',
    description:'',
}

export default function ContactForm() {

    const handleOnSubmit = (values:any,{resetForm}:any) => {
        alert(JSON.stringify(values));
        resetForm();
    }

    return (
        <div className="contact-form">
            <div className="contact-form__wrapper">
                    <Formik initialValues={INITIAL_VALUES} onSubmit={handleOnSubmit}>
                        {({values,errors,handleSubmit,handleChange}) => {
                            console.log(errors,values);
                            return (
                                <form onSubmit={handleSubmit} className="contact-form__wrapper__the-form">
                                    <div className="contact-form__wrapper__the-form__split">
                                        <input
                                            className="input"
                                            type="name"
                                            name="name"
                                            onChange={handleChange}
                                            placeholder="Tên gọi"
                                            value={values.name}
                                        />

                                        <input
                                            className="input"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email}
                                            placeholder="Địa chỉ Email"
                                        />
                                    </div>

                                    <textarea 
                                        className="input-textarea" 
                                        name="description" 
                                        onChange={handleChange} 
                                        value={values.description}
                                        placeholder="Nội dung"
                                    ></textarea>

                                    <button className="button" type="submit">Gửi đi</button>
                                </form>
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