import { request } from "@/api/request"
import { useQuery } from "@tanstack/react-query"

export const useGetSingleCategory = (id: string) => {
    return useQuery({
        queryKey: ['single-cat',id],
        queryFn: () => request
            .get(`/category/${id}/`)
            .then(res => res.data)
    })
}