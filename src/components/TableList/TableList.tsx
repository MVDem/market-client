import { Switch, Table, TableColumnsType } from 'antd';
import { Offer } from '../../types/Offers';
import TableListItem from './TableListItem';
import { offersAPI } from '../../store/services/offers.service';

type TableList = {
  farmerId: number;
};

function TableList({ farmerId }: TableList) {
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();
  const [deleteOffer] = offersAPI.useDeleteMutation();
  const { data: offers, refetch } = offersAPI.useGetPaginatedSortedOffersQuery({
    search: { columnName: 'farmerId', value: farmerId.toString() },
  });

  const handleDeleteOffer = async (id: number) => {
    await deleteOffer({ offerId: id });
    await refetch();
  };

  const handleActivate = async (checked: boolean, offer: Offer) => {
    const formData = new FormData();
    formData.append('isActive', checked.toString());
    await changeOffer({ body: formData, id: offer.id });
    await refetch();
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
