import styles from '../styles/uploader.module.css';
import Papa from 'papaparse';

interface UploaderProps {
    message: string, 
    setDataCsvFile: any
}

export default function Uploader(props: UploaderProps) {

    const changeHandler = (event: any) => {
        Papa.parse(event.target.files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                props.setDataCsvFile(results.data)
            },
        });
    };

    return (
        <div className={ styles.uploaderArea }>
            <div>
                { props.message }
            </div>
            <div>
                <input
                    type="file"
                    name="file"
                    accept=".csv"
                    onChange={changeHandler}
                    style={{ display: "block", margin: "10px auto" }}
                />
            </div>
        </div>
    );
}


// https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0

