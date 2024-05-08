'use client'

import { useQuery } from "@tanstack/react-query";
import { request } from "@/api/request";

export const useGetSingleSub = (id:string) => {
    return useQuery({
        queryKey: ['sub-single',id],
        queryFn: () => request
            .get(`/category/${id}/`)
            .then(res => res.data)
    })
}