import { FiSearch } from "react-icons/fi";
import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, FC, useState } from "react"
import Button from "../../button/Button"

const Search: FC = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <div>
            <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            <Link href={`/q?term=${search}`}>
                <Button variant="orange" size="sm">
                    <FiSearch size={18} />
                </Button>
            </Link>
        </div>
    )
}

export default Search
