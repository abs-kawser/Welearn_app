// import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import { RadioButton } from 'react-native-paper';

// const QuizDetails = () => {

//     const [selectedOption, setSelectedOption] = useState(null);


//     return (

// <ScrollView style={{ flex: 1, backgroundColor: "#e5e5e5" }}>

//     <View style={styles.quizView}>

//         <View style={styles.quizText}>
//             <View>
//                 <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "#0a0908" }}>
//                     01: What does HTML stand for?
//                 </Text>
//             </View>


//             <View style={styles.ansOfQuiz}>
//                 <RadioButton.Group
//                     onValueChange={newValue => setSelectedOption(newValue)}
//                     value={selectedOption}
//                 >
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option1"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyper Text Markup Language</Text>
//                     </View>

//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option2"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyperlink Text Makeup Language</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option3"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyperlink Test Markdown Language</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option4"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyper Tool Markup Language</Text>
//                     </View>

//                 </RadioButton.Group>
//             </View>

//         </View>


//     </View>

//     <View style={styles.quizView}>

//         <View style={styles.quizText}>
//             <View>
//                 <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "#0a0908" }}>
//                     01: What does HTML stand for?
//                 </Text>
//             </View>


//             <View style={styles.ansOfQuiz}>
//                 <RadioButton.Group
//                     onValueChange={newValue => setSelectedOption(newValue)}
//                     value={selectedOption}
//                 >
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option1"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyper Text Markup Language</Text>
//                     </View>

//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option2"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyperlink Text Makeup Language</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option3"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyperlink Test Markdown Language</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option4"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyper Tool Markup Language</Text>
//                     </View>

//                 </RadioButton.Group>
//             </View>

//         </View>


//     </View>

//     <View style={styles.quizView}>

//         <View style={styles.quizText}>
//             <View>
//                 <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", color: "#0a0908" }}>
//                     01: What does HTML stand for?
//                 </Text>
//             </View>


//             <View style={styles.ansOfQuiz}>
//                 <RadioButton.Group
//                     onValueChange={newValue => setSelectedOption(newValue)}
//                     value={selectedOption}
//                 >
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option1"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyper Text Markup Language</Text>
//                     </View>

//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option2"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyperlink Text Makeup Language</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option3"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyperlink Test Markdown Language</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value="option4"
//                             color="#000" // Black color for selected option
//                         />
//                         <Text>Hyper Tool Markup Language</Text>
//                     </View>

//                 </RadioButton.Group>
//             </View>

//         </View>


//     </View>

// </ScrollView>

//     )
// }

// export default QuizDetails


// import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import { RadioButton } from 'react-native-paper';
// import CustomHeader from './../../component/CustomHeader';

// const QuizDetails = () => {

//     const [selectedOptions, setSelectedOptions] = useState({});

//     const handleOptionChange = (questionIndex, newValue) => {
//         setSelectedOptions(prevState => {
//             const updatedOptions = {
//                 ...prevState,
//                 [questionIndex]: newValue
//             };
//             console.log("Selected Options:", JSON.stringify(updatedOptions, null, 2));
//             return updatedOptions;
//         });
//     };

//     const renderQuestion = (question, index) => {

//         return (

// <View key={index} style={styles.quizView}>
//     <View style={styles.quizText}>
//         <View style={{ marginVertical: 10 }}>
//             <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#0a0908" }}>
//                 {index + 1}: {question.questionText}
//             </Text>
//         </View>
//         <View style={styles.ansOfQuiz}>
//             <RadioButton.Group
//                 onValueChange={newValue => handleOptionChange(index, newValue)}
//                 value={selectedOptions[index]}
//             >
//                 {question.options.map((option, optionIndex) => (
//                     <View key={optionIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <RadioButton.Android
//                             value={option.value}
//                             color="#006400" // Black color for selected option
//                         />
//                         <Text>{option.label}</Text>
//                     </View>
//                 ))}
//             </RadioButton.Group>
//         </View>
//     </View>
// </View>

//         );

//     };

//     // Example data - this can be replaced with dynamically fetched data

//     const questions = [
//         {
//             questionText: "What does HTML stand for?",
//             options: [
//                 { label: "Hyper Text Markup Language", value: "option1" },
//                 { label: "Hyperlink Text Makeup Language", value: "option2" },
//                 { label: "Hyperlink Test Markdown Language", value: "option3" },
//                 { label: "Hyper Tool Markup Language", value: "option4" }
//             ]
//         },

//         {
//             questionText: "What does HTML stand for?",
//             options: [
//                 { label: "Hyper Text Markup Language", value: "option1" },
//                 { label: "Hyperlink Text Makeup Language", value: "option2" },
//                 { label: "Hyperlink Test Markdown Language", value: "option3" },
//                 { label: "Hyper Tool Markup Language", value: "option4" }
//             ]
//         },

//         {
//             questionText: "What does HTML stand for?",
//             options: [
//                 { label: "Hyper Text Markup Language", value: "option1" },
//                 { label: "Hyperlink Text Makeup Language", value: "option2" },
//                 { label: "Hyperlink Test Markdown Language", value: "option3" },
//                 { label: "Hyper Tool Markup Language", value: "option4" }
//             ]
//         },

//         {
//             questionText: "What does HTML stand for?",
//             options: [
//                 { label: "Hyper Text Markup Language", value: "option1" },
//                 { label: "Hyperlink Text Makeup Language", value: "option2" },
//                 { label: "Hyperlink Test Markdown Language", value: "option3" },
//                 { label: "Hyper Tool Markup Language", value: "option4" }
//             ]
//         },
//         // Add more questions here
//     ];


//     return (

//     <>
//         <>
//             <CustomHeader title={"Your quiz"} />
//         </>
//         <ScrollView style={{ flex: 1, backgroundColor: "#E1F4FF" }}>
//             {questions?.map((question, index) => renderQuestion(question, index))}
//         </ScrollView>
//     </>

//     );
// };

// export default QuizDetails;

// const styles = StyleSheet.create({
//     quizView: {
//         margin: 15,
//         padding: 15,
//         flex: 0.3,
//         backgroundColor: "#e6ccb2",
//         borderRadius: 15
//     },
//     quizText: {
//         // flex: 1,
//         flexDirection: "column",
//     },
//     ansOfQuiz: {
//         alignSelf: "center"
//     }

// });







// progress bar 

import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import { RadioButton } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';


const QuizDetails = () => {

    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questionsPerSet = 3;




    const renderQuestion = (question, index) => {



        return (

            <>
                <View key={index} style={styles.quizView}>
                    <View style={styles.quizText}>

                        <View style={{}}>
                            <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#0a0908", }}>
                                {index + 1}: {question.questionText}
                            </Text>
                        </View>

                        <View style={styles.ansOfQuiz}>
                            <RadioButton.Group
                                onValueChange={newValue => handleOptionChange(index, newValue)}
                                value={selectedOptions[index]}
                            >
                                {question.options.map((option, optionIndex) => (
                                    <View key={optionIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Checkbox.Android
                                            status={selectedOptions[index] && selectedOptions[index].includes(option.value) ? 'checked' : 'unchecked'}
                                            onPress={() => handleOptionChange(index, option.value)}
                                            color="#006400"
                                        />
                                        <Text style={{ color: "#03071e", fontSize: 15 }}>{option.label}</Text>
                                    </View>
                                ))}
                            </RadioButton.Group>
                        </View>

                    </View>
                </View>
            </>


        );
    };

    const questions = [
        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },

        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },

        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },

        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },
        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },
        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },
        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },
        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },
        {
            questionText: "What does HTML stand for?",
            options: [
                { label: "Hyper Text Markup Language", value: "option1" },
                { label: "Hyperlink Text Makeup Language", value: "option2" },
                { label: "Hyperlink Test Markdown Language", value: "option3" },
                { label: "Hyper Tool Markup Language", value: "option4" }
            ]
        },
        // Add more questions here
    ];


    const handleNext = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + questionsPerSet);
    };

    const handleBack = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex - questionsPerSet);
    };


    const progress = (currentQuestionIndex + questionsPerSet) / questions.length;

    // const progress = (currentQuestionIndex + 1) / questions.length;
    // const progress = currentQuestionIndex / questions.length;
    // `${progress * 100}%`

    const totalPages = Math.ceil(questions.length / questionsPerSet);
    const currentPage = Math.floor(currentQuestionIndex / questionsPerSet) + 1;


    const handleOptionChange = (questionIndex, optionValue) => {

        setSelectedOptions(prevState => {
            // Copy previous selected options array or initialize if not exists
            const updatedOptions = {
                ...prevState,
                [questionIndex]: prevState[questionIndex] ? [...prevState[questionIndex]] : [],
            };

            const index = updatedOptions[questionIndex].indexOf(optionValue);

            if (index !== -1) {
                // If option already selected, remove it
                updatedOptions[questionIndex].splice(index, 1);
            } else {
                // Otherwise, add the option to selected options
                updatedOptions[questionIndex].push(optionValue);
            };

            console.log("Selected Options:", JSON.stringify(updatedOptions, null, 2));
            return updatedOptions;

        });
    };

    return (

<View style={{ flex: 1, backgroundColor: "#E1F4FF", }}>

    <CustomHeader title={"Your Quiz"} />
    {/* <View style={{ backgroundColor: "#E1F4FF" }}> */}
    {/* </View> */}

    <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
            <View style={{ backgroundColor: '#ccc', height: 15, borderRadius: 5, width: '100%' }}>
                <View style={{ backgroundColor: '#4aa77c', height: 15, borderRadius: 5, width: `${progress * 100}%` }} />
            </View>
        </View>
    </View>

    <View style={styles.pageNumberContainer}>
        <View style={styles.pageNumber}>
            <Text style={styles.pageNumberText}>{currentPage}/{totalPages}</Text>
        </View>
    </View>

    <ScrollView style={{ flex: 1, backgroundColor: "#E1F4FF" }}>

        {questions.slice(currentQuestionIndex, currentQuestionIndex + questionsPerSet).map((question, index) =>
            renderQuestion(question, currentQuestionIndex + index, index)
        )}
    </ScrollView>

    <View style={styles.navigationButtons}>

        {currentQuestionIndex > 0 && (
            <Button title=" Back" onPress={handleBack} />
        )}

        {/* {currentQuestionIndex < questions.length - 2 && (
<Button title=" Next" onPress={handleNext} />
)} */}

        {currentQuestionIndex < questions.length - questionsPerSet && (
            <Button title=" Next" onPress={handleNext} />
        )}

    </View>

</View>

    );
};



const styles = StyleSheet.create({

    quizView: {
        margin: 20,
        padding: 20,
        flex: 0.3,
        // backgroundColor: "#fff299",
        backgroundColor: "#e9ecef",
        borderRadius: 15
    },
    quizText: {
        // flexDirection: "column",
    },
    ansOfQuiz: {
        alignSelf: "center",
        padding: 10,
        // backgroundColor:"green",
    },
    progressBar: {
        marginHorizontal: 15,
        marginVertical: 20,

    },
    nextButton: {
        marginHorizontal: 20,
        marginBottom: 20,

    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#E1F4FF",

        // marginTop: 20
    },
    pageNumberContainer: {
        alignItems: "flex-end",
        backgroundColor: "#E1F4FF",
        marginRight: 18,
        padding: 2

        // marginVertical: 10,
    },
    pageNumber: {
        backgroundColor: '#006400', // Background color of the circle
        borderRadius: 50, // Make it a circle by setting borderRadius to half of the width/height
        width: 40, // Adjust width and height to make the circle larger or smaller
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageNumberText: {
        color: '#fff', // Text color
        fontSize: 16, // Text size
    },

});



export default QuizDetails;





{/* <View key={index} style={styles.quizView}>
<View style={styles.quizText}>
<View style={{ marginVertical: 10 }}>
<Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#0a0908" }}>
    {index + 1}: {question.questionText}
</Text>
</View>
<View style={styles.ansOfQuiz}>
<RadioButton.Group
    onValueChange={newValue => handleOptionChange(index, newValue)}
    value={selectedOptions[index]}
>
    {question.options.map((option, optionIndex) => (
        <View key={optionIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton.Android
                value={option.value}
                onPress={() => handleOptionChange(index, option.value)}
                color={selectedOptions[index] === option.value ? "#006400" : "#4d194d"}

                // color="#006400" 
            />
            <Text>{option.label}</Text>
        </View>
    ))}
</RadioButton.Group>
</View>
</View>
 </View> */}





{/* {question.options.map((option, optionIndex) => (
<View key={optionIndex} style={{ alignItems: 'center', flex: 0.1 }}>
    <Button
        title={option.label}
        onPress={() => handleOptionChange(index, option.value)}
        color={selectedOptions[index] === option.value ? "#006400" : "#4d194d"}
    />
</View>
  ))} */}



{/* <View style={styles.ansOfQuiz}>
<RadioButton.Group
onValueChange={newValue => handleOptionChange(index, newValue)}
value={selectedOptions[index]}
>
{question.options.map((option, optionIndex) => (
<View key={optionIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
<RadioButton.Android
value={option.value}
// onPress={() => handleOptionChange(index, option.value)}
// color={selectedOptions[index] === option.value ? "#006400" : "#4d194d"}
color="#006400"
/>
<Text style={{ color: "#03071e", fontSize: 15 }}>{option.label}</Text>
</View>
))}
</RadioButton.Group>
    </View> */}



// const handleOptionChange = (questionIndex, newValue) => {

//     setSelectedOptions(prevState => {
//         const updatedOptions = {
//             ...prevState,
//             [questionIndex]: newValue
//         };
//         console.log("Selected Options:", JSON.stringify(updatedOptions, null, 2));
//         return updatedOptions;
//     });
// };


// const handleOptionChange = (questionIndex, newValue) => {
//     setSelectedOptions(prevState => {
//         const updatedOptions = {
//             ...prevState,
//             [questionIndex]: prevState[questionIndex] === newValue ? null : newValue
//         };
//         console.log("Selected Options:", JSON.stringify(updatedOptions, null, 2));
//         return updatedOptions;
//     });
// };






