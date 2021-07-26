import { useRouter } from 'next/router';
import cn from "classnames";
import styles from '../styles/Pagebuttons.module.scss';

const Pagebutton = ({page ,onPage,path}) => {
    const router = useRouter();
    const handleClick = (page) => {
        router.push(`../${path}${page}`);
    }
    return ( 
        <button onClick={()=>handleClick(page)} className={cn({
            [styles.button]:true,
            [styles.disabled]:onPage===page,
            [styles.nab]:page==="..."
        })} disabled={page==="..."}>{page}</button>
    );
}
 
export default Pagebutton;