import style from "./style.module.scss";
import {RiArrowRightSLine} from "react-icons/ri";

const Header = () => {
    return (
        <div className={style.header}>
            <h2 className={style.headerTitle}>Online now</h2>
            <div onClick={() => console.log('modal')} className={style.headerLink}>
                <span>More</span>
                <RiArrowRightSLine size={20} fill="gray"/>
            </div>
        </div>
    );
};

export default Header;
