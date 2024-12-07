"use client"

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FC } from "react"
import { useProfile } from "@/src/hooks/useProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/src/services/user.service";

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
    const { profile } = useProfile()

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['toggle favorite'],
        mutationFn: () => UserService.toggleFavorite(productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get profile'] })
        }
    })

    if (!profile) return null

    const isExists = profile.favorites.some(favorite => favorite.id === productId)

    return (
        <div>
            <button onClick={() => mutate()} className="text-primary">
                {isExists ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
        </div>
    )
}

export default FavoriteButton
