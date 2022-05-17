import {useRouter} from 'next/router'
export default function Comment () {
    const router = useRouter();
    const {pid, comment} = router.query;

    return (
        <div>
        <p>comment id: {pid}</p>
        <p>comment: {comment}</p>
        </div>
    )
}