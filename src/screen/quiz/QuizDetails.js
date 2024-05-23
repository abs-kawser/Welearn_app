
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
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
    const isLastPage = currentPage === totalPages;


    // Test  case 1
    // const handleOptionChange = (questionIndex, optionValue) => {

    //     setSelectedOptions(prevState => {
    //         // Copy previous selected options array or initialize if not exists
    //         const updatedOptions = {
    //             ...prevState,
    //             [questionIndex]: prevState[questionIndex] ? [...prevState[questionIndex]] : [],
    //         };

    //         const index = updatedOptions[questionIndex].indexOf(optionValue);
    //         if (index !== -1) {
    //             // If option already selected, remove it
    //             updatedOptions[questionIndex].splice(index, 1);
    //         } else {
    //             // Otherwise, add the option to selected options
    //             updatedOptions[questionIndex].push(optionValue);
    //         };
    //         console.log("Selected Options:", JSON.stringify(updatedOptions, null, 2));
    //         return updatedOptions;
    //     });
    // };



    // Test  case 2 
    const handleOptionChange2 = () => {
        setSelectedOptions(prevState => {
            // Make a copy of the selected options object to avoid mutating the state directly
            const updatedOptions = { ...prevState};
            // Check if selected options array for the question exists, if not initialize it
            updatedOptions[questionIndex] = updatedOptions[questionIndex] || [];
            // Toggle the selection status of the option
            const isSelected = updatedOptions[questionIndex].includes(optionValue);

            if (isSelected) {
                // If option is already selected, filter it out
                updatedOptions[questionIndex] = updatedOptions[questionIndex].filter(value => value !== optionValue);
            } else {
                // If option is not selected, add it to the array
                updatedOptions[questionIndex].push(optionValue);
            }
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

            <View style={{ flex: 0.1, justifyContent: 'center', backgroundColor: "#edffff" }}>
                <View style={styles.navigationButtons}>
                    {currentQuestionIndex > 0 && (
                        // <Button title=" Back" onPress={handleBack}  style={styles.buttonText} />
                        <TouchableOpacity
                            style={styles.btnStyle}
                            onPress={handleBack}
                        >
                            <Text
                                style={styles.textStyle}
                            >
                                Back
                            </Text>
                        </TouchableOpacity>
                    )}

                    {currentQuestionIndex < questions.length - questionsPerSet && (
                        // <Button title=" Next" onPress={handleNext} />
                        <TouchableOpacity
                            style={styles.btnStyle}
                            onPress={handleNext} >
                            <Text
                                style={styles.textStyle}
                            >
                                Next
                            </Text>
                        </TouchableOpacity>
                    )}

                    {isLastPage && (
                        // <Button title="Save" />
                        <TouchableOpacity
                            style={styles.saveBtnStyle}
                        >
                            <Text
                                style={styles.textStyle}
                            >
                                Save
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>

    );
};

export default QuizDetails;

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
        // backgroundColor: "#E1F4FF",
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
        color: '#fff',
        fontSize: 16,
        // Text size
        // Text color
    },

    btnStyle: {
        borderRadius: 10,
        backgroundColor: "#00A9B8",
        width: 60,
        height: 45,
        justifyContent: "center",
        alignItems: "center",


    },

    textStyle: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: 'Roboto-bold'
    },
    saveBtnStyle: {
        borderRadius: 10,
        backgroundColor: "#57cc99",
        width: 60,
        height: 45,
        justifyContent: "center", // Align text vertically center
        alignItems: "center", // Align text horizontally center
    }

});




























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

{/* {currentQuestionIndex < questions.length - 2 && (
    <Button title=" Next" onPress={handleNext} />
    )} */}



