import Layout from './layout'
import styles from '../styles/Home.module.css'


export default function About() {
    return (
        <div>
            <Layout></Layout>
            <div className={styles.container}>
                <h3 class="text-center pt-5">About us</h3>
                <p class="text-center pt-2">Công nghệ Thông tin là một ngành lớn và quan trọng của Việt Nam, nhưng sự thiếu hụt nhân lực cả về số lượng và chất lượng luôn là một rào cản để phát triển.</p>
            </div>
        </div>
    )
}