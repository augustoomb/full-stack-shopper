interface ValidationBtnProps {
  dataCsvFile: (any)[]
}

export default function ValidationBtn(props: ValidationBtnProps) {

    function validateData() {
      const stringfy = JSON.stringify(props.dataCsvFile);
      console.log(JSON.parse(stringfy))
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