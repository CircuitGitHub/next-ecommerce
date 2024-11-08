const Filter = () => {

    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
                    <option>Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <input type="text" name="Min" id="" placeholder="Min Price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />

                <input type="text" name="Max" id="" placeholder="Max Price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />

                <select name="size" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
                    <option>Size</option>
                    <option value="">Size</option>
                </select>

                <select name="color" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
                    <option>Color</option>
                    <option value="">Test</option>
                </select>

                <select name="category" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
                    <option>Category</option>
                    <option value="">New Arrival</option>
                    <option value="">Popular</option>
                </select>

                <select name="all-filters" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
                    <option>All Filters</option>
                </select>
            </div>

            <div className="">
                <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
                    <option>Sort By</option>
                    <option value="">Price (low to high)</option>
                    <option value="">Price (high to low)</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter