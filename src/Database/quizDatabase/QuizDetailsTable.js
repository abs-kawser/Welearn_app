import { db } from "../MainDatabase";

export const initQuizDatabase = () => {

    db.transaction(txn => {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='quiz_details' ", [],
            () => {
                console.log("quiz:", res.row.length);
                if (res.rows.length === 0) {
                    txn.executeSql('DROP TABLE IF EXISTS quiz_details', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS quiz_details '
                    )

                } else {
                    console.log('already created item table');

                }
            }
        )

    }) 
}

const upDtateMethod =()=>{

}
































// this is my response I want save those useing sql lite database this is my initialization for database and I manintain a another folder  QuizDetailsTable  

//step's 

//1: need a button in final screen or eatch screen static type . done 
//2:  














// Selected Options: {
//     "0": [
//       "option1"
//     ],
//     "1": [
//       "option1"
//     ],
//     "2": [
//       "option1"
//     ],
//     "3": [
//       "option1"
//     ],
//     "4": [
//       "option1"
//     ],
//     "5": [
//       "option1"
//     ]
//   }


