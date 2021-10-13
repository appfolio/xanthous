import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { Col, CustomInput, ListGroup, ListGroupItem, Row, ScrollContainer } from '../../index';
import FilterHeader from './FilterHeader';
import SortHeader from './SortHeader';
import ListItem from './ListItem';
import useMap from '../../hooks/useMap';

const List = ({
  children: render,
  filter,
  filterPlaceholder,
  flush,
  header,
  height,
  scrollPositionKey,
  itemClassName,
  items,
  onExpand,
  onFilter,
  onSelect,
  onSort,
  select,
  selected,
  selectedKeyMapper,
  sort,
  sortByLabel,
  sortOptions,
  ...props
}) => {
  const {
    map: selection,
    has: hasItem,
    add: addItem,
    remove: removeItem,
    clear: clearSelection,
    replace: replaceSelection
  } = useMap(selected, selectedKeyMapper);
  const [selectAllId] = useState(() => uniqueId('selectall-'));
  const selectAllRef = useRef();

  useDeepCompareEffect(() => onSelect(Array.from(selection.values())), [Array.from(selection.values()), onSelect]);
  useDeepCompareEffect(() => replaceSelection(selected), [selected, replaceSelection]);

  useDeepCompareEffect(() => {
    const includes = (xs, x) => xs.map(selectedKeyMapper).includes(selectedKeyMapper(x));
    selection.forEach((item) => { if (!includes(items, item)) removeItem(item); });
  }, [items, Array.from(selection.values()), selectedKeyMapper]);

  useDeepCompareEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = items.length > 0 && selection.size > 0 && selection.size !== items.length;
    }
  }, [items, Array.from(selection.values())]);

  const handleSelection = (item, checked) => {
    if (select === 'checkbox' || select === 'switch') {
      if (hasItem(item) && !checked) removeItem(item);
      else if (checked) addItem(item);
    } else if (!hasItem(item)) {
      clearSelection();
      addItem(item);
    }
  };

  const handleSelectAll = () => {
    if (selection.size === items.length) replaceSelection();
    else replaceSelection(items);
  };

  const [sortProperty, setSortProperty] = useState(sort.property);
  const ascendingInitial = sort.ascending === undefined ? true : sort.ascending;
  const [ascending, setAscending] = useState(ascendingInitial);

  useEffect(() => {
    if (!onSort) {
      return;
    }

    if (ascending !== ascendingInitial || sortProperty !== sort.property) {
      onSort({ property: sortProperty, ascending });
    }
  }, [ascending, ascendingInitial, onSort, sort.property, sortProperty]);

  const showHeader = header || select === 'checkbox' || select === 'switch' || onFilter || onSort;

  return (
    <ListGroup flush={flush} tag="div" {...props}>
      {showHeader && (
        <ListGroupItem tag="header" className="d-flex align-items-center bg-secondary js-header">
          {select && (select !== 'radio') && (
            <div className="h-100 d-flex align-items-center mr-3">
              <CustomInput
                id={selectAllId}
                type={select}
                checked={items.length && selection.size === items.length}
                disabled={items.length === 0}
                label={<span className="sr-only">Select all</span>}
                onChange={() => handleSelectAll()}
                innerRef={selectAllRef}
              />
            </div>
          )}
          <div className="w-100">
            {(!sortOptions && !onFilter) ?
              (header) : (
                <Row className="no-gutters">
                  <Col xs="12" sm="6" md="4">
                    {header}
                    {!header && onFilter && (
                      <FilterHeader
                        placeholder={filterPlaceholder}
                        onChange={onFilter}
                        value={filter}
                      />
                    )}
                  </Col>
                  {sortOptions && (
                    <SortHeader
                      ascending={ascending}
                      sortByLabel={sortByLabel}
                      sortOptions={sortOptions}
                      sortProperty={sortProperty}
                      onChangeAscending={setAscending}
                      onChangeProperty={setSortProperty}
                    />
                  )}
                </Row>
            )}
          </div>
        </ListGroupItem>
      )}
      <ScrollContainer height={height} scrollPositionKey={scrollPositionKey}>
        <ListGroup flush={flush}>
          {items.map((item, i) => (
            <ListItem
              className={itemClassName}
              expanded={item.expanded || false}
              item={item}
              key={item.key || i}
              select={select}
              selected={hasItem(item)}
              onSelect={handleSelection}
              onExpand={onExpand}
            >
              {render}
            </ListItem>
          ))}
        </ListGroup>
      </ScrollContainer>
    </ListGroup>
  );
};

List.propTypes = {
  ...ListGroup.propTypes,
  children: PropTypes.func,
  filter: PropTypes.string,
  filterPlaceholder: PropTypes.string,
  header: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scrollPositionKey: PropTypes.string,
  onExpand: PropTypes.func,
  onFilter: PropTypes.func,
  itemClassName: PropTypes.string,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  select: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onSelect: PropTypes.func,
  onSort: PropTypes.func,
  selectedKeyMapper: PropTypes.func,
  sort: PropTypes.shape({
    property: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    ascending: PropTypes.bool
  }),
  sortByLabel: PropTypes.string,
  sortOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

List.defaultProps = {
  children: () => <></>,
  filterPlaceholder: 'Search',
  items: [],
  onSelect: () => {},
  select: '',
  selected: [],
  selectedKeyMapper: x => x,
  sort: {},
  sortByLabel: 'Sort by',
};

export default List;
