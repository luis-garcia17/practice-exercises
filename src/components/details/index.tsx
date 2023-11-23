import styles from './styles.module.scss'

const Details = ({summary, children}: {summary: string, children: React.ReactNode}) => {
  return (
    <details className={styles.details}>
      <summary>{summary}</summary>
      {children}
    </details>
  );
}

export default Details