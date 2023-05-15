import { validateProduct } from '../services/products';

interface ValidationBtnProps {
  dataCsvFile: (any)[]
}

export default function ValidationBtn(props: ValidationBtnProps) {

    async function validateData() {
      const stringfyObjCsv = JSON.stringify(props.dataCsvFile);
      await validateProduct(stringfyObjCsv);
    }

    return (
      <button
        disabled={ props.dataCsvFile.length === 0 }
        onClick={ validateData }
      >
          <h2>
            Validar <span>-&gt;</span>
          </h2>
          <p>
            Valide os dados do seu arquivo antes de salvar os dados no banco.
          </p>
      </button>  
    )
}