import Product from "./Product"
import styles from '../styles/dataTable.module.css';

interface dataTableProps {
  dataAPIProducts: any
}

export default function DataTable(props: dataTableProps) {

    return (
      <div className={ styles.tableArea }>
        {
          !props.dataAPIProducts ? (
            <p>Sem dados</p>
          ) : (
            props.dataAPIProducts.map((item: any, index: number) => (
              <Product item={ item } key={ index }/>
            ))
          )
        }
      </div>
    )
}