import React from 'react'
import ContainerCenterFit from './layout/ContainerCenterFit'
import Heading from './ui/Heading'
import Input from './ui/Input'
import Button from './ui/Button'

export default function ContactForm() {
    return (
        <ContainerCenterFit appendClass={`gap-5`}>
            <Heading>Contact Us</Heading>
            <p>Please let us know how we{"'"}re doing!</p>
            <form>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-2">
                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </ContainerCenterFit>
    )
}
