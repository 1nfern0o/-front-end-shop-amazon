"use client"

import { rooActions } from "@/src/store/root-actions"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rooActions, dispatch), [dispatch])
}