import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import './table.scss';

const Table = ({ items, columns }) => (
  <div className="table">
    {
      items.map((item, index) => (
        <Row item={item} columns={columns} key={index}/>
      ))
    }
  </div>
);

Table.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.array,
};

export default Table;
