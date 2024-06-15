import { Button, Switch, Table, TableColumnsType } from 'antd';
import { Offer } from '../../types/Offers';
import TableListItem from './TableListItem';
import { offersAPI } from '../../store/services/offers.service';
import styles from './tableListItem.module.scss';
import { useState } from 'react';
import BackdropCreateOfferForm from '../BackdropForm/BackdropCreateOfferForm';

type TableList = {
  farmerId: number;
};

function TableList({ farmerId }: TableList) {
  const [open, setOpen] = useState(false);
  const [changeOffer, { isLoading }] = offersAPI.useUpdateMutation();
  const [createOffer, { isLoading: isLoadingCreate }] =
    offersAPI.useCreateMutation();
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
        <Button
          type="dashed"
          danger
          onClick={() => handleDeleteOffer(+value.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleCreate = async (data: any) => {
    const formData = new FormData();
    for (let key in data) {
      console.log('key=>', key, data[key]);

      if (key.includes('imageURL')) {
        formData.append('file', data[key]);
        continue;
      }
      formData.append(key, String(data[key]));
    }
    formData.append('farmerId', farmerId.toString());
    await createOffer({ body: formData });
    setOpen(false);
    await refetch();
  };

  return (
    <>
      <div className={styles.offersHeader}>
        <h2>Offers:</h2>
        <Button type="primary" onClick={() => setOpen(true)}>
          Add offer
        </Button>
      </div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <TableListItem offer={record} refetch={refetch} />
          ),
          rowExpandable: (record) => record.name_EN !== 'Not Expandable',
        }}
        rowKey={(record) => record.id}
        dataSource={offers?.offers}
        pagination={false}
      />
      <BackdropCreateOfferForm
        open={open}
        setOpen={setOpen}
        onSubmit={handleCreate}
        inputs={inputs}
        isLoading={isLoadingCreate}
      />
    </>
  );
}
export default TableList;

const inputs = [
  {
    name: 'name_EN',
    label: 'English name',
    type: 'text',
    placeholder: 'Enter English name',
    required: true,
  },
  {
    name: 'name_HE',
    label: 'Hebrew name',
    type: 'text',
    placeholder: 'Enter Hebrew name',
    // required: true,
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    placeholder: 'Enter price',
    required: true,
  },
  {
    name: 'description_EN',
    label: 'English description',
    type: 'text',
    placeholder: 'Enter English description',
    required: true,
  },
  {
    name: 'description_HE',
    label: 'Hebrew description',
    type: 'text',
    placeholder: 'Enter Hebrew description',
    // required: true,
  },
  {
    name: 'unit',
    label: 'Unit',
    type: 'text',
    placeholder: 'Enter unit',
    required: true,
  },
  {
    name: 'imageURL',
    label: 'Image',
    type: 'upload',
    placeholder: 'Enter unit',
    required: true,
  },
];
