import React from 'react';
import Text from './components/Text';
import Table from './components/Table';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import P from './components/P';
import Run from './components/Run';
import TableProperties from './components/TableProperties';
import TableWidth from './components/TableWidth';
import TableBorders from './components/TableBorders';
import TopBorder from './components/TopBorder';
import BottomBorder from './components/BottomBorder';
import LeftBorder from './components/LeftBorder';
import RightBorder from './components/RightBorder';
import InsideHorizontalBorder from './components/InsideHorizontalBorder';
import InsideVerticalBorder from './components/InsideVerticalBorder';
import TableCellProperties from './components/TableCellProperties';
import TableCellWidth from './components/TableCellWidth';
import TableGrid from './components/TableGrid';
import GridColumn from './components/GridColumn';
import TableCellShading from './components/TableCellShading';

interface Props {
  data: { [name: string]: any }[];
}

const FileList: React.SFC<Props> = ({ data }) => {
  const columns =
    data && data.length > 0 ? ['序号', '附件名称', '附件大小'] : [];
  return data.length > 0 ? (
    <Table>
      <TableProperties>
        <TableWidth width={8000} type="dxa" />
        <TableBorders>
          <TopBorder value="single" size={4} space={0} color="DBDBDB" />
          <LeftBorder value="single" size={4} space={0} color="DBDBDB" />
          <BottomBorder value="single" size={4} space={0} color="DBDBDB" />
          <RightBorder value="single" size={4} space={0} color="DBDBDB" />
          <InsideHorizontalBorder
            value="single"
            size={4}
            space={0}
            color="DBDBDB"
          />
          <InsideVerticalBorder
            value="single"
            size={4}
            space={0}
            color="DBDBDB"
          />
        </TableBorders>
      </TableProperties>
      <TableGrid>
        {columns.map(() => (
          <GridColumn width={8000 / columns.length} />
        ))}
      </TableGrid>

      <TableRow>
        {columns.map((column) => (
          <TableCell>
            <TableCellProperties>
              <TableCellWidth width={8000 / columns.length} type="dxa" />
              <TableCellShading value="clear" fill="c9c4c4" />
            </TableCellProperties>
            <P>
              <Run>
                <Text>{column}</Text>
              </Run>
            </P>
          </TableCell>
        ))}
      </TableRow>

      {data.map((item, index) => (
        <TableRow>
          <TableCell>
            <TableCellProperties>
              <TableCellWidth width={8000 / columns.length} type="dxa" />
            </TableCellProperties>
            <P>
              <Run>
                <Text>{index + 1}</Text>
              </Run>
            </P>
          </TableCell>
          <TableCell>
            <TableCellProperties>
              <TableCellWidth width={8000 / columns.length} type="dxa" />
            </TableCellProperties>
            <P>
              <Run>
                <Text>{item.title}</Text>
              </Run>
            </P>
          </TableCell>
          <TableCell>
            <TableCellProperties>
              <TableCellWidth width={8000 / columns.length} type="dxa" />
            </TableCellProperties>
            <P>
              <Run>
                <Text>{(item.fileLength / 1024).toFixed(2)}KB</Text>
              </Run>
            </P>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  ) : null;
};

export default FileList;
