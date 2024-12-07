"use client"

import { FC, PropsWithChildren } from "react"
import Sidebar from "./sidebar/Sidebar"
import Header from "./header/Header"

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => 
    <div>
        <Header />
        <div className="grid" style={{
            gridTemplateColumns: '1fr 4fr'
        }}>
            <Sidebar />
            <main className="p-12">{children}</main>
        </div>
    </div>

export default Layout
