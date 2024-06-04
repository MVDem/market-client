import styles from './tableList.module.scss';

type Items = {
  [key: string]: string | number | boolean;
};

type TableList = {
  tableNames: Array<string | number>;
  items: Items[];
  handleItemClick: (id: number) => void;
};

function TableList({ tableNames, items, handleItemClick }: TableList) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listWrapper}>
        {items?.length ? (
          <table className={styles.list}>
            <thead>
              <tr>
                {tableNames &&
                  tableNames.map((name, i) => {
                    return <th key={i}>{name}</th>;
                  })}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item, i) => {
                  return (
                    <tr key={i}>
                      {tableNames.map((name, j) => {
                        return <td key={j}>{item[name]}</td>;
                      })}
                      <button
                        className={styles.btn}
                        onClick={() => handleItemClick(+item.id)}
                      >
                        More info
                      </button>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <p>No offers found</p>
        )}
      </div>
    </div>
  );
}
export default TableList;
