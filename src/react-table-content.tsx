import React from 'react';
import Text from './components/Text';
import Table from './components/Table';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import P from './components/P';
import Run from './components/Run';
import TableGrid from './components/TableGrid';
import GridCol from './components/GridCol';
import TableProperties from './components/TableProperties';
import TableWidth from './components/TableWidth';

const content = (
  <Table>
    <TableProperties>
      <TableWidth width={8000} />
    </TableProperties>
    <TableGrid>
      <GridCol w={4000} />
      <GridCol w={4000} />
    </TableGrid>
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
