'use client'

import { request } from "@/api/request";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => request
            .get('/category/')
            .then(res => res.data)
    })
}