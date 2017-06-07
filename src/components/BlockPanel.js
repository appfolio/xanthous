import React, { Component } from 'react';
import { Button, Card, CardBlock, CardHeader, CardTitle, Icon } from '../';

class BlockPanel extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    controls: React.PropTypes.node,
    className: React.PropTypes.string,
    expandable: React.PropTypes.bool,
    hideOnToggle: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    onToggle: React.PropTypes.func,
    open: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    className: '',
    open: true,
    expandable: false,
    hideOnToggle: false,
    onToggle: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => {
    const open = !this.state.open;
    this.setState({ open });
    this.props.onToggle(open);
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { children, className, controls, expandable, hideOnToggle, title, onEdit, onToggle, ...props } = this.props;
    const { open } = this.state;

    return (
      <Card className={`rounded-0 border-0 shadow-1 ${className}`} {...props}>
        <CardHeader
          className={`border-0 d-flex flex-wrap align-items-center justify-content-start py-2 pr-2 ${expandable ? 'pl-2' : ''}`}
          style={{ borderRadius: 0 }}
        >
          {expandable ?
            <Icon
              className="text-muted mr-1"
              name="caret-right"
              rotate={open ? 90 : undefined}
              fixedWidth
              style={{ transition: 'transform 200ms ease-in-out' }}
              onClick={this.toggle}
              ref="icon"
              style={{ cursor: expandable ? 'pointer' : 'default' }}
            /> : null}
          <CardTitle
            className="m-0 my-1 mr-auto"
            onClick={this.toggle}
            ref="title"
            style={{ cursor: expandable ? 'pointer' : 'default' }}
          >
            {title}
          </CardTitle>
          <div className="d-flex">
            <div className="d-inline-flex">
              {onEdit ?
                <Button color="link" className="p-0" ref="edit" onClick={onEdit}>edit</Button> :
                controls
              }
            </div>
          </div>
        </CardHeader>
        {!expandable || open || hideOnToggle ?
          <CardBlock hidden={expandable && !open && hideOnToggle}>
            {children}
          </CardBlock>
          : null}
      </Card>
    );
  }
}

export default BlockPanel;
