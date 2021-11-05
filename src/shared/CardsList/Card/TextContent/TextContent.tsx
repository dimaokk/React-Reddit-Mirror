import React from "react";
import styles from './TextContent.css'

export default function TextContent() {
    return (
        <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img
                            className={styles.avatar}
                            src="https://img2.freepng.ru/20180720/ivv/kisspng-computer-icons-user-profile-avatar-job-icon-5b521c567f49d7.5742234415321078625214.jpg"
                            alt="User photo"
                        />
                        <a href="#user-link" className={styles.username}>
                            Дмитрий Цыбин
                        </a>
                    </div>
                    <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>
                            орубликовано 
                        </span>
                        {' '} 4 часа назад {' '}
                    </span>
                </div>
                <h2 className={styles.title}>
                    <a href="#post-link" className={styles.postLink}>
                        Следует отметить, что новая модель организационной
                        деятельности Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eos ex error consequuntur nostrum
                        dolor! Aperiam voluptas perspiciatis necessitatibus
                        libero dolorem porro corporis, dolorum laboriosam sint
                        exercitationem eius, voluptate architecto provident.
                    </a>
                </h2>
            </div>
    )
}