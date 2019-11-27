import React from 'react';
import Text from './components/Text';
import Table from './components/Table';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import P from './components/P';
import Run from './components/Run';
import TableProperties from './components/TableProperties';
import TableWidth from './components/TableWidth';
import TableCellProperties from './components/TableCellProperties';
import TableCellWidth from './components/TableCellWidth';
import TableGrid from './components/TableGrid';
import GridColumn from './components/GridColumn';

const content = (
  <Table>
    <TableProperties>
      <TableWidth width={8000} type="dxa" />
    </TableProperties>
    <TableGrid>
      <GridColumn width={4000} />
      <GridColumn width={4000} />
    </TableGrid>
    <TableRow>
      <TableCell>
        <TableCellProperties>
          <TableCellWidth width={4000} type="dxa" />
        </TableCellProperties>
        <P>
          <Run>
            <Text>第一列</Text>
          </Run>
        </P>
      </TableCell>
      <TableCell>
        <TableCellProperties>
          <TableCellWidth width={4000} type="dxa" />
        </TableCellProperties>
        <P>
          <Run>
            <Text>第二列</Text>
          </Run>
        </P>
      </TableCell>
    </TableRow>
  </Table>
);

export default content;
