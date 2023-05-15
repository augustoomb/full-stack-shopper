import Product from "./Product"

interface dataTableProps {
  dataAPIProducts: any
}

export default function DataTable(props: dataTableProps) {

    return (
      <div>
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