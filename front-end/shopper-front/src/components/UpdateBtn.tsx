import { updateProduct } from '../services/products';


interface RefreshBtnProps {
  dataAPIProducts: any
  cleanItems: () => void
}

export default function UpdateBtn(props: RefreshBtnProps) {
    const checkContentErrors = () => {
      return props.dataAPIProducts.some((item:any) => item.contentErrors.length > 0);
    }
    
    const checkRulesErrors = () => {
      return props.dataAPIProducts.some((item:any) => item.rulesErrors.length > 0);
    }

    const checkTypeErrors = () => {
      return props.dataAPIProducts.some((item:any) => item.typeErrors.length > 0);
    }

    const checkErrors = () => {
      if(!props.dataAPIProducts) {
        return true
      }
      
      if(
        checkContentErrors() ||
        checkRulesErrors()  ||
        checkTypeErrors()
      ) {
        return true
      }
    }

    async function updateData() {
      const arrPriceAndCode = props.dataAPIProducts.map((item:any) => (
        {
          code: item.data['product_code'],
          price: item.data['new_price']
        }
      ))

      const stringfyObjProd = JSON.stringify(arrPriceAndCode);

      const resp = await updateProduct(stringfyObjProd);
    
      if(resp) {
        props.cleanItems();
      }
    }


    return (
      <button
          disabled={ checkErrors() }
          onClick={ updateData }
        >
        <h2>
          Atualizar <span>-&gt;</span>
        </h2>
        <p>
          Atualize os dados no banco
        </p>
      </button>  
    )
}