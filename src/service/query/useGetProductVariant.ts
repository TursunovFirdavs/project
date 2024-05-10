'use client'

import { useQuery } from "@tanstack/react-query";
import { request } from "@/api/request";

export const useGetProductVariant = (id:string) => {
    return useQuery({
        queryKey: ['product',id],
        queryFn: () => request
            .get(`/product_variant/?product__category=${id}`)
            .then(res => res.data)
    })
}