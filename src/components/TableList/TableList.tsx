import { Switch, Table, TableColumnsType } from 'antd';
import { OfferCard } from '../../types/Offers';
import TableListItem from './TableListItem';
import { offersAPI } from '../../store/services/offers.service';

type TableList = {
  farmerId: number;
};

function TableList({ farmerId }: TableList) {
  const { data: offers } = offersAPI.useGetAllByFarmerQuery({
    farmerId,
  });
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();
  const [deleteOffer] = offersAPI.useDeleteMutation();

  const handleDeleteOffer = (id: number) => {
    deleteOffer({ offerId: id });
  };

  const handleActivate = (checked: boolean, offer: OfferCard) => {
    changeOffer({ ...offer, isActive: checked, price: offer.price.toString() });
  };

  const columns: TableColumnsType<OfferCard> = [
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
      dataSource={offers}
    />
  );
}
export default TableList;
