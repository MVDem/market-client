import { Switch, Table, TableColumnsType } from 'antd';
import { Offer } from '../../types/Offers';
import TableListItem from './TableListItem';
import { offersAPI } from '../../store/services/offers.service';

type TableList = {
  farmerId: number;
};

function TableList({ farmerId }: TableList) {
  console.log(farmerId.toString());
  const { data: offers } = offersAPI.useGetPaginatedSortedOffersQuery({
    search: { columnName: 'farmerId', value: farmerId.toString() },
  });

  console.log(offers);
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();
  const [deleteOffer] = offersAPI.useDeleteMutation();

  const handleDeleteOffer = (id: number) => {
    deleteOffer({ offerId: id });
  };

  const handleActivate = (checked: boolean, offer: Offer) => {
    // changeOffer({ ...offer, isActive: checked, price: offer.price.toString() });
  };

  const columns: TableColumnsType<Offer> = [
    { title: 'Name', dataIndex: 'name_EN', key: 'name_EN' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Unit', dataIndex: 'unit', key: 'unit' },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (_, value: any) => (
        <Switch
          checked={value.isActive}
          onChange={(checked) => handleActivate(checked, value)}
          loading={isLoading}
          checkedChildren={'Active'}
          unCheckedChildren={'Inactive'}
        />
      ),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (_, value) => (
        <button onClick={() => handleDeleteOffer(+value.id)}>Delete</button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => <TableListItem offer={record} />,
        rowExpandable: (record) => record.name_EN !== 'Not Expandable',
      }}
      rowKey={(record) => record.id}
      dataSource={offers?.offers}
    />
  );
}
export default TableList;
