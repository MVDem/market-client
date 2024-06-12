import { Table, TableColumnsType } from 'antd';
import { OfferCard } from '../../types/Offers';
import TableListItem from './TableListItem';

type TableList = {
  columns: TableColumnsType<OfferCard>;
  items: OfferCard[];
};

function TableList({ columns, items }: TableList) {
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <TableListItem offer={record} />,
        rowExpandable: (record) => record.name_EN !== 'Not Expandable',
      }}
      rowKey={(record) => record.id}
      dataSource={items}
    />
  );
}
export default TableList;
