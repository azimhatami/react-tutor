import { useGetCat } from "./useGetCat"

export const Cat = () => {
    const {data, isLoading, refetchNewData, error} = useGetCat();

    if (isLoading) {
        return <p>Loading...</p>
    };

    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <h2>{data?.fact}</h2>
            <button onClick={refetchNewData}>Refetch Data</button>
        </div>
    )
}