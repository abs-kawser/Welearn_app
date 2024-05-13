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

//             <View key={index} style={styles.quizView}>
//                 <View style={styles.quizText}>
//                     <View style={{ marginVertical: 10 }}>
//                         <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#0a0908" }}>
//                             {index + 1}: {question.questionText}
//                         </Text>
//                     </View>
//                     <View style={styles.ansOfQuiz}>
//                         <RadioButton.Group
//                             onValueChange={newValue => handleOptionChange(index, newValue)}
//                             value={selectedOptions[index]}
//                         >
//                             {question.options.map((option, optionIndex) => (
//                                 <View key={optionIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
//                                     <RadioButton.Android
//                                         value={option.value}
//                                         color="#006400" // Black color for selected option
//                                     />
//                                     <Text>{option.label}</Text>
//                                 </View>
//                             ))}
//                         </RadioButton.Group>
//                     </View>
//                 </View>
//             </View>

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
import { StyleSheet, Text, View, ScrollView,Button } from 'react-native';
import CustomHeader from '../../component/CustomHeader';


const QuizDetails = () => {

    const [selectedOptions, setSelectedOptions] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleOptionChange = (questionIndex, newValue) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionIndex]: newValue
        }));
    };

    const handleNext = () => {
        // Move to the next question
        setCurrentQuestionIndex(prevIndex => prevIndex + 2);
    };

    const handleBack = () => {
        // Move to the previous set of questions
        setCurrentQuestionIndex(prevIndex => prevIndex - 2);
    };

    const renderQuestion = (question, index) => {
        return (
            <View key={index} style={styles.quizView}>
                <View style={styles.quizText}>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "bold", color: "#0a0908" }}>
                            {index + 1}: {question.questionText}
                        </Text>
                    </View>
                    <View style={styles.ansOfQuiz}>
                        {question.options.map((option, optionIndex) => (
                            <View key={optionIndex} style={{ flexDirection: 'row', alignItems: 'center', flex: 0.1 }}>
                                <Button
                                    title={option.label}
                                    onPress={() => handleOptionChange(index, option.value)}
                                    color={selectedOptions[index] === option.value ? "#006400" : "#4d194d"}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </View>
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
        // Add more questions here
    ];

    // Calculate progress
    const progress = (currentQuestionIndex + 1) / questions.length;

    return (
        <>
        
            <ScrollView style={{ flex: 1, backgroundColor: "#E1F4FF" }}>
                <CustomHeader title={"Your Quiz"} />
                <View style={styles.progressBar}>
                    <View style={{ backgroundColor: '#ccc', height: 10, borderRadius: 5, width: '100%' }}>
                        <View style={{ backgroundColor: '#006400', height: 10, borderRadius: 5, width: `${progress * 100}%` }} />
                    </View>
                </View>
                {questions.slice(currentQuestionIndex, currentQuestionIndex + 2).map((question, index) =>
                    renderQuestion (question, currentQuestionIndex + index)
                )}
                <View style={styles.navigationButtons}>
                    {currentQuestionIndex > 0 && (
                        <Button title="Backk" onPress={handleBack} />
                    )}
                    {currentQuestionIndex < questions.length - 2 && (
                        <Button title=" Next" onPress={handleNext} />
                    )}
                </View>
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    quizView: {
        margin: 15,
        padding: 15,
        flex: 0.3,
        backgroundColor: "#e6ccb2",
        borderRadius: 15
    },
    quizText: {
        flexDirection: "column",
    },
    ansOfQuiz: {
        alignSelf: "center"
    },
    progressBar: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    nextButton: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
});

export default QuizDetails;



