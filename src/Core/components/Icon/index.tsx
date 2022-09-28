import icons from "./icons";
import { cx } from "Core/utils";
import styles from "./Icon.module.scss";
import { IconName } from "Core/types/Icon";

export type IconProps = {
  name: IconName;
  className?: string;
};

/**
 * Renders an icon with the given name.
 * @param {IconName} name Name of icon to be rendered
 * @param {string} className (Optional) className to be given
 */
const Icon: React.FC<IconProps> = ({ name, className }) => {
  const Element = icons[name];

  return <>{Element && <Element className={cx(styles.container, className)} />}</>;
};

export default Icon;
