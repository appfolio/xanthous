import React, { useState } from 'react';
import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { ListGroupItemProps } from 'reactstrap';
import { Button, Collapse, Input, Icon, Label, ListGroupItem } from '../../index';

export interface ListItemProps<T> extends Omit<ListGroupItemProps, 'onSelect'> {
  children: (item: T, selected?: boolean) => React.ReactNode,
  id?: string,
  className?: string,
  color?: string,
  expanded?: boolean,
  item: T,
  onExpand?: (item: T) => React.ReactNode | undefined,
  onSelect: (item: T, checked?: boolean) => void
  select?: 'checkbox' | 'radio' | 'switch' | '',
  selected?: boolean,
  selectable: (item: T) => boolean
}

function ListItem<T>({
  children: render,
  id: itemId,
  className,
  color,
  expanded: defaultExpanded = false,
  item,
  onExpand,
  onSelect,
  select,
  selected,
  selectable,
  ...props
}: ListItemProps<T>) {
  const isExpandable = onExpand !== undefined;
  const ExpandedItem = isExpandable ? onExpand!(item) : undefined;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [id] = useState(() => uniqueId('listitem-'));

  return (
    <ListGroupItem
      color={selected ? 'primary' : color}
      className={classnames('rounded-0', className)}
      {...props}
    >
      <div className="d-flex align-items-center">
        {select && (
          <div className="pe-2">
            <Input
              id={id}
              type={select}
              checked={selected}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSelect(item, e.target.checked)}
              disabled={!selectable(item)}
            />
            <Label for={id} className="sr-only">Select {itemId}</Label>
          </div>
        )}
        <div className="me-auto w-100 px-2">{render(item, selected)}</div>
        {isExpandable && (
          <Button
            color="link"
            onClick={() => setExpanded(!expanded)}
            className="pe-0"
            style={{
              visibility: ExpandedItem === undefined ? 'hidden' : 'visible'
            }}
          >
            <Icon name={`chevron-${expanded ? 'up' : 'down'}`} />
            <span className="sr-only">Expand {itemId}</span>
          </Button>
        )}
      </div>
      {ExpandedItem === undefined || (
        <Collapse isOpen={expanded}>{ExpandedItem}</Collapse>
      )}
    </ListGroupItem>
  );
}

ListItem.displayName = 'ListItem';

export default ListItem;
