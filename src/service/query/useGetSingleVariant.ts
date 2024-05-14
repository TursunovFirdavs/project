'use client'

import { useQuery } from "@tanstack/react-query";
import { request } from "@/api/request";

export const useGetSingleVariant = (id:string) => {
    return useQuery({
        queryKey: ['sub-single',id],
        queryFn: () => request
            .get(`/product_variant/${id}/`)
            .then(res => res.data)
    })
}