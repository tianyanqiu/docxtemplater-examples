import React from 'react';
import Text from './components/Text';
import Table from './components/Table';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import P from './components/P';
import Run from './components/Run';

const content = (
  <Table>
    <TableRow>
      <TableCell>
        <P>
          <Run>
            <Text>第一列</Text>
          </Run>
        </P>
      </TableCell>
      <TableCell>
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
