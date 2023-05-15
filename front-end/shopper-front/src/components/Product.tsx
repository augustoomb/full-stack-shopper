interface productProps {
    item: any
  }
  
  export default function Product(props: productProps) {
  
      return (
        <div>
          <div>
            <h4>Dados do produto</h4>
            <p>Código: { props.item.data['product_code'] }</p>
            <p>Nome: { props.item.data['name'] }</p>
            <p>Preço Atual: { props.item.data['sales_price'] }</p>
            <p>Novo Preço: { props.item.data['new_price'] }</p>
          </div>
          <div>
            <h4>Mensagens de erro</h4>
            {
              props.item.contentErrors.length > 0 ? (
                props.item.contentErrors.map((itemErr: any, i: number) => (
                  <p key={ i }>{ itemErr }</p>
                ))
              ) : null
            }
            {
              props.item.rulesErrors.length > 0 ? (
                props.item.rulesErrors.map((itemErr: any, i: number) => (
                  <p key={ i }>{ itemErr }</p>
                ))
              ) : null
            }
            {
              props.item.typeErrors.length > 0 ? (
                props.item.typeErrors.map((itemErr: any, i: number) => (
                  <p key={ i }>{ itemErr }</p>
                ))
              ) : null
            }
          </div>
          <p>--------------------------------------------</p>
        </div>
      )
  }