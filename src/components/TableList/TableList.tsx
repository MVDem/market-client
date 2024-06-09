import { Table, TableColumnsType } from 'antd';
import { OfferCard } from '../../types/Offers';
import OfferShortDetails from '../OfferShortDetails/OfferShortDetails';

type TableList = {
  columns: TableColumnsType<OfferCard>;
  items: OfferCard[];
};

function TableList({ columns, items }: TableList) {
  console.log(items);
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <OfferShortDetails offerId={record.id} />
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      rowKey={(record) => record.id}
      dataSource={items}
    />
  );
}
export default TableList;
