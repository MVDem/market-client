import { Table, TableColumnsType } from 'antd';
import TableOffersItem from '../TableOffersItem/TableOffersItem';
import { OfferCard } from '../../types/Offers';

type TableList = {
  columns: TableColumnsType<OfferCard>;
  items: OfferCard[];
  handleItemClick: (id: number) => void;
};

function TableList({ columns, items }: TableList) {
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <TableOffersItem offerCard={record} />,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      rowKey={(record) => record.id}
      dataSource={items}
    />
  );
}
export default TableList;
