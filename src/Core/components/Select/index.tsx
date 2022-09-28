import { cx } from "Core/utils";
import Card from "Core/components/Card";
import Icon from "Core/components/Icon";
import styles from "./Select.module.scss";
import { useOuterClick } from "Core/hooks";
import Loading from "Core/components/Loading";
import { Children, MouseEvent, ReactElement, ReactNode, useRef, useState } from "react";

type OptionProps<T> = { value: T; children?: ReactNode };

export type SelectProps<T> = {
  value?: T;
  loading?: boolean;
  placeholder?: string;
  onChange: (value?: T) => void;
  children?: ReactElement<OptionProps<T>> | ReactElement<OptionProps<T>>[];
};

/**
 * Renders a selection component with the given children as options.
 * @param {any} value (Optional) Current value of the component
 * @param {boolean} loading (Optional) Loading state of the component
 * @param {string} placeholder Placeholder value to be rendered when select value is empty
 * @param {Function} onChange Callback function to be called when the value changes
 * @param {ReactElement<OptionProps>[]} children (Optional) Option values as components
 */
const Select = <T,>({ value, onChange, placeholder, children, loading = false }: SelectProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const selected = children ? Children.map(children, (x) => x)?.find((x) => x.props.value === value) : null;

  const onToggle = () => {
    setVisible((prev) => !prev);
  };

  const onClick = (e: T) => () => {
    if (!loading) {
      onChange(e);
      onToggle();
    }
  };

  const onClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange();
  };

  useOuterClick(() => {
    setVisible(false);
  }, ref);

  return (
    <div ref={ref} className={cx(styles.container, [styles.visible, visible])} role="combobox" aria-expanded={visible}>
      <Loading loading={loading}>
        <Card className={styles.box} onClick={onToggle} data-testid="select-toggle">
          {selected?.props.children || placeholder || "Select"}
          <Icon className={styles.arrow} name="chevronDown" />
          {value && (
            <button role="button" onClick={onClear}>
              Clear
            </button>
          )}
        </Card>
      </Loading>
      <Card className={styles.menu}>
        <ul>
          {children &&
            Children.map(children, (x) => (
              <li
                role="option"
                onClick={onClick(x.props.value)}
                aria-selected={selected?.props.value === x.props.value}
                className={cx([styles.selected, selected?.props.value === x.props.value])}
              >
                {x.props.children}
              </li>
            ))}
        </ul>
      </Card>
    </div>
  );
};

/**
 * Dummy component to be used as a React component to provide Select Options in a better way.
 * @param {OptionProps<any>} _ Option item props
 */
Select.Option = <T,>(_: OptionProps<T>) => null;

export default Select;
