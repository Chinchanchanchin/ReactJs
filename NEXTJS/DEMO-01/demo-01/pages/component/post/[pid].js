import {useRouter} from 'next/router'
export default function Post () {
    const router = useRouter();
    const {pid, state} = router.query;

    return (
        <div>
        <p>post id: {pid}</p>
        <p>state: {state}</p>
        </div>
    )
}