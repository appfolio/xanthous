import React from 'react';
import styles from './LabelBadge.scss';

export default class LabelBadge extends React.Component {

  static propTypes = {
    classNames: React.PropTypes.string,
    label: React.PropTypes.string,
    maxWidth: React.PropTypes.number,
    onRemove: React.PropTypes.func,
    removable: React.PropTypes.bool,
    value: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    removable: true,
    maxWidth: 14
  };

  render() {
    const { classNames, label, maxWidth, onRemove, removable, value } = this.props;
    const labelClasses = 'bg-faded text-muted rounded-left d-inline-flex align-self-stretch px-3 py-2';
    const valueClasses = `label-badge-value ${styles.trim} rounded-right px-3 py-2`;
    const style = {
      maxWidth: maxWidth ? `${maxWidth}rem` : null
    };

    return (
      <span className={`card rounded d-inline-flex flex-row justify-content-between align-items-center ${classNames}`}>
        {label ?
          <strong className={labelClasses}>
            <span className={`${styles.trim} align-self-center`} style={style}>{label}</span>
          </strong>
          : null}
        <span className={valueClasses} style={style}>{value}</span>
        {removable ? <a className="close mr-2" onClick={onRemove}>&times;</a> : null}
      </span>
    );
  }
}
