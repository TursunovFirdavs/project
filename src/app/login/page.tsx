"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginType } from "@/types"
import { useLogin } from "@/service/mutation/useLogin"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    phone_number: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "password must be at least 2 characters.",
    }),
})

export default function Login() {
    const { mutate } = useLogin()
    const { push } = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone_number: "",
            password: "",
        },
    })

    // const { register } = useForm()

    const onSubmit = (value:loginType) => {
        mutate(value , {
            onSuccess: res => {
                Cookies.set('token', res.token, {expires: 3})
                push('/')
            },
            onError: err => console.log(err)
        })
    }

    return (
        <div className=" bg-secondary-light h-[100vh] flex">
            <div className="max-w-[500px] w-full m-auto bg-white px-7 py-7 rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-5">Log in</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />  
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
