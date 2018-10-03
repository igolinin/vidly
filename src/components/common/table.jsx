import React, { Component } from 'react'
import TableHeader from './tableheader'
import TableBody from './tablebody'

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className='table'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />

    </table>
  )
}

export default Table
