import React, { useState } from 'react'
import jsonp from "jsonp"
import { Input } from "@/components/ui/input"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"


const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('submited')
        e.preventDefault();
        const postUrl = `https://outlook.us22.list-manage.com/subscribe/post?u=aabea6c3b79764caccab32c21&id=25252d76a8`
        jsonp(`${postUrl}&EMAIL=${email}&FNAME=${firstName}&LNAME=${lastName}`, { param: "c" }, (err, data) => {
            if (err) {
                console.log(err)
            }
            const { msg } = data
            setMessage(msg)
        })
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
                        <EnvelopeOpenIcon /> Subscribe
                    </Button>
                    <p className='mt-3'>{message}</p>
                </form>
            </div>
            <div>
                <h2 className="text-gray-400">Never be the last one to know about new events, details, and fun stuff.</h2>
            </div>
        </>

    )
}


export default SignUpForm