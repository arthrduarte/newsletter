import React, { useState } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Input } from "@/components/ui/input"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

interface CustomFormProps {
    status: string | null,
    message: string | null | Error,
    onValidated: (formData: { EMAIL: string, MERGE1: string, MERGE2: string }) => void
}

const CustomForm = ({ status, message, onValidated }: CustomFormProps) => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
    }

    return (
        <>
            <div className="lg:w-1/2 text-center">
                <div className="flex flex-col lg:flex-row lg:items-end justify-center">
                    <div>
                        <h1 className="font-bold text-5xl lg:mr-3">Steel Stackers'</h1>
                    </div>
                    <div>
                        <h1 className="font-semibold lg:text-end">Newsletter</h1>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 my-10">
                <form onSubmit={(e) => handleSubmit(e)}>
                    {status === "sending" && (<div className="mc__alert mc__alert--sending">sending...</div>)}
                    {status === "error" && message && (<div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: typeof message === 'string' ? message : message.toString() }} />)}
                    {status === "success" && message && (<div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: typeof message === 'string' ? message : message.toString() }} />)}
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="mt-3"

                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-3"
                    />
                    <Button className="w-full mt-3" type="submit">
                        <EnvelopeOpenIcon /> Login with Email
                    </Button>
                </form>
            </div>
            <div>
                <h2 className="text-gray-400">Never be the last one to know about new events, details, and fun stuff.</h2>
            </div>
        </>

    )
}

const MailchimpFormContainer = () => {

    const postUrl = `https://outlook.us22.list-manage.com/subscribe/post?u=${import.meta.env.REACT_APP_MAILCHIMP_U}&id=${import.meta.env.REACT_APP_MAILCHIMP_ID}`

    return (
        <div>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default MailchimpFormContainer