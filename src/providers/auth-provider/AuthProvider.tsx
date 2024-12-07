"use client"

import { FC, PropsWithChildren, useEffect } from "react";
import Cookies from 'js-cookie'
import { useAuth } from "@/src/hooks/useAuth";
import dynamic from "next/dynamic";
import { useActions } from "@/src/hooks/useActions";
import { getAccessToken } from "@/src/services/auth/auth.helper";
import { usePathname, useRouter } from "next/navigation";
import { REFRESH_TOKEN } from "@/src/constants/token.constants";
import { protectedRoutes } from "./protected-routes.data";
import { ADMIN_PANEL_URL } from "@/src/config/url.config";
import NotFound from "@/src/app/not-found";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const { user } = useAuth()
    const { checkAuth, logout } = useActions()

    const pathname = usePathname()

    useEffect(() => {
        const accessToken = getAccessToken()

        if (accessToken) checkAuth()
    }, [])

    useEffect(() => {
        const refreshToken = Cookies.get(REFRESH_TOKEN)

        if (!refreshToken && user) logout()
    }, [pathname])

    const router = useRouter()

    const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))

    const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

    if (!isProtectedRoute && !isAdminRoute) return <>{children}</>

    if (user?.isAdmin) return <>{children}</>
    if (user && isProtectedRoute) return <>{children}</>

    if (user && isAdminRoute) <NotFound />

    pathname !== '/auth' && router.replace('/auth')
    return null
}

export default AuthProvider