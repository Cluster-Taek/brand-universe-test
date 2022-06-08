import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useStoreList = () => {
    const { data, error } = useSWR(`http://localhost:9000/stores`, fetcher)

    return {
        store: data,
        isLoading: !error && !data,
        isError: error
    }
}

export const useStoreDetail = (id) => {
    const { data, error } = useSWR(`http://localhost:9000/stores/${id}`, fetcher)

    return {
        store: data,
        isLoading: !error && !data,
        isError: error
    }
}