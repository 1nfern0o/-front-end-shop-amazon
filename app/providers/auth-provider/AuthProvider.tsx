import { FC, PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "./auth-page.types";
import Cookies from 'js-cookie'
import { useAuth } from "@/app/hooks/useAuth";
import dynamic from "next/dynamic";
import { useActions } from "@/app/hooks/useActions";
import { getAccessToken } from "@/app/services/auth/auth.helper";
import { useRouter } from "next/router";

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: { isOnlyUser }, children }) => {
    const { user } = useAuth()
    const { checkAuth, logout } = useActions()

    const { pathname } = useRouter()

    useEffect(() => {
        const accessToken = getAccessToken()

        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get('refreshToken')

        if (!refreshToken && user) logout()
    }, [pathname])

    return isOnlyUser
        ? <DynamicCheckRole Component={{ isOnlyUser }} children={children} />
        : <>{children}</>
}

export default AuthProvider