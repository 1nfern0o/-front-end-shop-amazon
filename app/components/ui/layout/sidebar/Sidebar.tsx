import { useActions } from "@/app/hooks/useActions"
import { useAuth } from "@/app/hooks/useAuth"
import { useRouter } from "next/router"
import { FC } from "react"
import { FiLogOut } from "react-icons/fi"
import Loader from "../../Loader"
import { CategoryService } from "@/app/services/category.service"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import cn from "clsx"

const Sidebar: FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['get categories'],
        queryFn: () => CategoryService.getAll(),
        select: ({ data }) => data
    })

    const { asPath } = useRouter()

    const { user } = useAuth()
    const { logout } = useActions()

    return (
        <aside
            className="bg-secondary flex flex-col justify-between"
            style={{
                height: 'calc(100vh - 91px)'
            }}
        >
            <div>
                {isLoading
                    ? <Loader />
                    : data
                        ? (
                            <>
                                <div className="text-xl text-white mt-4 mb-6 ml-6">
                                    Categories:
                                </div>
                                <ul>
                                    {data.map(category => (
                                        <li key={`sidebar-category-item-${category.id}`}>
                                            <Link
                                                className={cn(
                                                    'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
                                                    asPath === `/category/${category.slug}` ? 'text-primary' : 'text-white'
                                                )}
                                                href={`/category/${category.slug}`}
                                            >
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )
                        : <div>Categorues not found!</div>
                }
            </div>

            {!!user && (
                <button
                    className="text-white flex items-center ml-10"
                    onClick={() => logout()}
                >
                    <FiLogOut />
                    <span className="ml-2">Logout</span>
                </button>
            )}
        </aside>
    )
}

export default Sidebar
