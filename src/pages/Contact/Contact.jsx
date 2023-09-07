import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wofs2bm', 'template_mxzdc77', form.current, 'R0QhTKj85y1pEI-gF')
            .then((result) => {
                console.log(result.text);
                setFormSubmitted(true); 
                form.current.reset(); 
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Email has been send',
                    showConfirmButton: true,
                    timer: 2000
                })
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center text-black-500">Contact Us</h1>
            <div className="flex flex-col w-full lg:flex-row my-10">
                <div className="grid flex-grow card rounded-box place-items-center">
                    <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name" className="input input-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email" className="input input-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Complaints</span>
                                </label>
                                <textarea name="complaints" className="textarea textarea-primary" placeholder="Complaints"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-success' type="submit" value="Send" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
