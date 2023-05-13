import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/724b8480-f1c0-11ed-9eca-1f15a141e038";

const ContactForm = () => {
    const [status, setStatus] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Anything you need to inject dynamically
        const injectedData = {
            ADMIN_NAME: "sonawaneabhjeet273@gmail.com",
        };
        const data = { name, email, message };

        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                // It's likely a spam/bot request, so bypass it to validate via captcha
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement("input");
                        el.type = "hidden";
                        el.name = key;
                        el.value = injectedData[key];

                        e.target.appendChild(el);
                    });

                    e.target.submit();
                    throw new Error("Please finish the captcha challenge!");
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => setStatus("We'll be in touch soon."))
            .catch((err) => setStatus(err.toString()));
    };

    const isSubmitDisabled = !name || !email || !message;

    if (status) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center h-75 mt-4">
                <p className="fs-2">Thank you!</p>
                <p className="fs-6">{status}</p>
            </div>
        );
    }

    return (
        <Form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank" className="mt-5">
            <Form.Group className="mb-3">
                <Form.Control type="text" className="rounded-3 px-3" size="sm" name="name" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" className="rounded-3 px-3" size="sm" name="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" className="rounded-3 px-3" size="sm" rows={3} name="message" placeholder='Write Message' value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <div className="float-end">
                <Button variant="primary" className="rounded-3" size="sm" type="submit" disabled={isSubmitDisabled}>
                    Send a message
                </Button>
            </div>
        </Form>
    )
}

export default ContactForm;
