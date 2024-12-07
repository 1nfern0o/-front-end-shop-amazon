import { FiSearch } from "react-icons/fi";
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, FC, useState } from "react"
import Button from "../../button/Button"
import { useRouter } from "next/navigation";

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const { push } = useRouter()

    return (
        <div>
            <div
                className="border border-solid border-gray/10 grid w-1/2 rounded-xl overflow-hidden"
                style={{
                    gridTemplateColumns: '1fr 0.1fr'
                }}
            >
                <input
                    className="bg-[#22303E] text-sm py-2 px-4 text-white outline-none"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search"
                />
                <button
                    onClick={() => push(`/q?term=${searchTerm}`)}
                    className="bg-primary text-white flex items-center justify-center p-2.5"
                >
                    <FiSearch size={18} />
                </button>
            </div>
        </div>
    )
}

export default Search
