"use client"

import { FC, useState } from "react"
import Button from "@/src/components/ui/button/Button"
import Heading from "@/src/components/ui/Heading"
import { useAuth } from "@/src/hooks/useAuth"
import { useActions } from "@/src/hooks/useActions"
import { SubmitHandler, useForm } from "react-hook-form"
import { IEmailPassword } from "@/src/store/user/user.interface"
import Field from "@/src/components/ui/input/Field"
import { validEmail } from "./valid-email"
import Loader from "@/src/components/ui/Loader"

const Auth: FC = () => {
    const { isLoading } = useAuth()

    const { login, register } = useActions()

    const [type, setType] = useState<'login' | 'register'>('login')

    const { register: formRegister, handleSubmit, formState: { errors }, reset } = useForm<IEmailPassword>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
        if (type === 'login') login(data)
        else register(data)

        reset()
    }

    return (
        <section className="flex items-center h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg bg-white shadow-sm p-8 mx-auto"
            >
                <Heading className="capitalize text-center mb-4">{type}</Heading>

                {isLoading
                    ? <Loader />
                    : (
                        <>
                            <Field
                                {...formRegister('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: validEmail,
                                        message: 'Please enter a valid email address'
                                    }
                                })}
                                placeholder="Email"
                                error={errors.email?.message}
                            />

                            <Field
                                {...formRegister('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Min length should more 6 symbols'
                                    }
                                })}
                                type="password"
                                placeholder="Password"
                                error={errors.password?.message}
                            />

                            <Button variant="white">Let's go!</Button>
                            <div>
                                <button
                                    type="button"
                                    className="inline-block opacity-20 mt-3 text-sm"
                                    onClick={() => setType(type === 'login' ? 'register' : 'login')}
                                >
                                    {type === 'login' ? 'register' : 'login'}
                                </button>
                            </div>
                        </>
                    )}
            </form>
        </section>
    )
}

export default Auth
