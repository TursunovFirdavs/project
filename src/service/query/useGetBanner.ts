'use client'

import { request } from "@/api/request";
import { useQuery } from "@tanstack/react-query";

export const useGetBanner = () => {
    return useQuery({
        queryKey: ['banner'],
        queryFn: () => request
            .get('/banner/')
            .then(res => res.data)
    })
}