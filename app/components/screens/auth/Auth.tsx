import { FC, useState } from "react"
import Meta from "../../ui/Meta"
import Button from "../../ui/button/Button"
import Heading from "../../ui/Heading"
import { useAuth } from "@/app/hooks/useAuth"
import { useActions } from "@/app/hooks/useActions"
import { SubmitHandler, useForm } from "react-hook-form"
import { IEmailPassword } from "@/app/store/user/user.interface"
import Field from "../../ui/input/Field"
import { validEmail } from "./valid-email"
import Loader from "../../ui/Loader"

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
        <Meta title="Auth">
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
        </Meta>
    )
}

export default Auth
