import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useGetCat = () => {
    const {data, isLoading, refetch, error} = useQuery({
        queryKey: ['cat'],
        queryFn: async () => {
            // return axios.get('https://catfact.ninja/fact').then((res) => res.data)
            const response = await axios.get('https://catfact.ninja/fact');
            return response.data
        }
    });

    const refetchNewData = () => {
        alert('Data is refetched');
        refetch();
    }

    return {
        data,
        isLoading,
        refetchNewData,
        error,
    };
}