import { NavLink } from 'react-router-dom';
import styles from './tableList.module.scss';

type Items = {
  [key: string]: string | number | boolean;
};

type TableList = {
  tableNames: Array<{ value: string | number; label: string }>;
  items: Items[];
  handleItemClick: (id: number) => void;
};

function TableList({ tableNames, items, handleItemClick }: TableList) {
  return (
    <div className={styles.listWrapper}>
      {items?.length ? (
        <table className={styles.list}>
          <thead>
            <tr>
              {tableNames &&
                tableNames.map((param, i) => {
                  return <th key={i}>{param.label}</th>;
                })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, i) => {
                return (
                  <tr key={i}>
                    {tableNames.map((param, j) => {
                      if (param.label === 'Image') {
                        return (
                          <td key={j}>
                            <div>
                              <img src={param.value.toString()} alt="image" />
                            </div>
                          </td>
                        );
                      }
                      return <td key={j}>{item[param.value]}</td>;
                    })}
                    <NavLink to={`/offer/${item.id}`} className={styles.btn}>
                      More info
                    </NavLink>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <p>No offers found</p>
      )}
    </div>
  );
}
export default TableList;
