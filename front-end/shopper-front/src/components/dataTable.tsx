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
              <div key={ index }>
                <div>
                  <p>Código: { item.data['product_code'] }</p>
                  <p>Nome: { item.data['name'] }</p>
                  <p>Preço Atual: { item.data['sales_price'] }</p>
                  <p>Novo Preço: { item.data['new_price'] }</p>
                </div>
                {/* <div>
                  <p>{ item.data['product_code'] }</p>
                  <p>{ item.data['product_code'] }</p>
                  <p>{ item.data['product_code'] }</p>
                </div> */}
              </div>
            ))
          )
        }
      </div>
    )
}