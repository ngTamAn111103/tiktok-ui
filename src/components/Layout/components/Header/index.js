import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);
function Header() {
    return (
      // Toàn bộ
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Trái */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* Giữa */}
                <div className={cx('search')}>
                    <input
                        placeholder="Search account and video"
                        spellCheck={false}
                    />
                    <button className={cx('clear')}>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                    <i className={cx('fa-solid fa-spinner', 'loading')}></i>
                    <button className={cx('search-btn')}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                {/* Phải */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
