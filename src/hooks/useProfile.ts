"use client"

import { useQuery } from "@tanstack/react-query"
import { UserService } from "@/src/services/user.service"
import { IFullUser } from "@/src/types/user.interface"
import { errorCatch } from "@/src/api/api.helper"

export const useProfile = () => {
    const { data } = useQuery({
        queryKey: ['get profile'],
        queryFn: () => UserService.getProfile(),
        select: ({ data }) => data,
        throwOnError: (error, query) => {
            console.log(errorCatch(error), 'error')
            console.log(query, 'query')
            return true
        }
    })

    return { profile: data }
}