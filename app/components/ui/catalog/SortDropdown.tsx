import { FC, SetStateAction, Dispatch } from "react"
import { EnumProductSort } from "@/app/services/product/product.types";

interface ISortDropdown {
    sortType: EnumProductSort
    setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
    return (
        <div className="text-right mb-5">
            <select
                className="appearance-none py-1 px-2 bg-white border-gray"
                onChange={(e) => setSortType(e.target.value as any)}
                value={sortType}
            >
                {
                    (Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>)
                        .map(key => <option key={`sort-dropdown-item-${key}`}> {EnumProductSort[key]}</option>)
                }
            </select>
        </div>
    )
}

export default SortDropdown
