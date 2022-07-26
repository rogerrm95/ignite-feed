import styles from './styles.module.css'

interface AvatarProps {
    source: string,
    hasBorder?: boolean
}

export function Avatar({ source, hasBorder = true }: AvatarProps) {
    return (
        <img src={source} className={hasBorder ? styles.avatarWithBorder : styles.avatar} />
    )
}