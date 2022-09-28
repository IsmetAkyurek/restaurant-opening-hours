import { cx } from "Core/utils";
import { ReactNode } from "react";
import Icon from "Core/components/Icon";
import styles from "./Loading.module.scss";

export type LoadingProps = {
  loading?: boolean;
  className?: string;
  children?: ReactNode;
};

/**
 * Renders the given children with a loading element as an overlay.
 * @param {boolean} loading (Optional) Loading state of the container
 * @param {string} className (Optional) className to be given
 * @param {ReactNode} children (Optional) Elements to be rendered inside
 */
const Loading: React.FC<LoadingProps> = ({ loading, className, children }) => {
  return (
    <div className={cx(styles.container, className)}>
      {children}
      {loading !== false && (
        <div className={styles.overlay}>
          <Icon name="loading" />
        </div>
      )}
    </div>
  );
};

export default Loading;
