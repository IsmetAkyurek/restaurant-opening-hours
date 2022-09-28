import { cx } from "Core/utils";
import { HTMLAttributes } from "react";
import styles from "./Card.module.scss";

export type CardProps = HTMLAttributes<HTMLDivElement>;

/**
 * Renders a div with card styles.
 * @params : HTMLAttributes\<HTMLDivElement\>
 */
const Card: React.FC<CardProps> = ({ className, ...rest }) => {
  return <div className={cx(styles.container, className)} {...rest} />;
};

export default Card;
