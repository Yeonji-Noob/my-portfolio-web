import * as React from 'react';
//props로 넘기는 대신에 useContext를 사용함
import { useContext } from 'react';
import styled from 'styled-components';
import { TableContext } from './MineSearch';
import Tr from './Tr';



const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <TableStyle>
      <tbody>
        {Array(tableData.length).fill(null).map((tr, i) => <Tr key={i} rowIndex={i} />)}
      </tbody>
    </TableStyle>
  );
}

export default Table;

const TableStyle = styled.table`
 border-collapse: separate;
  position: absolute;
  width: 260px;
  height: 260px;

`;