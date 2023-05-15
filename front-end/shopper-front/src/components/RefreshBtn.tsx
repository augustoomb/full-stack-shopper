interface RefreshBtnProps {
  dataAPIProducts: any
}

export default function RefreshBtn(props: RefreshBtnProps) {
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

    return (
      <button
          disabled={ checkErrors() }
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