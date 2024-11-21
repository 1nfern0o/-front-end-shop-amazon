import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import Search from "./Search"
import { AiOutlineHeart } from "react-icons/ai"
import HeaderCart from "./cart/HeaderCart"
import HeaderProfile from "./HeaderProfile"

const Header: FC = () => 
    <header
        className="bg-secondary w-full py-6 px-6 grid"
        style={{
            gridTemplateColumns: '1fr 3fr 1.2fr'
        }}
    >
        <Link href="/">
            <Image
                priority
                width={180}
                height={37}
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
            />
        </Link>
        <Search />
        <div className="flex items-center justify-end gap-10">
            <Link href="/favorites" className="text-white">
                <AiOutlineHeart size={28} />
            </Link>
            <HeaderCart />
            <HeaderProfile />
        </div>
    </header>

export default Header
