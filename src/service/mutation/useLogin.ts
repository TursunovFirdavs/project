'use client'

import { request } from "@/api/request";
import { loginType } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (data:loginType) => request 
            .post('/api/admin-login/', data)
            .then(res => res.data)
    })
}