'use client'

import { request } from "@/api/request";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProduct = () => {
    return useQuery({
        queryKey: ['all-product'],
        queryFn: () => request
            .get('/product_variant/')
            .then(res => res.data)
    })
}