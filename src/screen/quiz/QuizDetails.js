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


import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import CustomHeader from './../../component/CustomHeader';

const QuizDetails = () => {

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (questionIndex, newValue) => {
        setSelectedOptions(prevState => {
            const updatedOptions = {
                ...prevState,
                [questionIndex]: newValue
            };
            console.log("Selected Options:",JSON.stringify(updatedOptions, null, 2));
            return updatedOptions;
        });
    };

    const renderQuestion = (question, index) => {

        return (
                 
            <View key={index} style={styles.quizView}>
                <View style={styles.quizText}>
                    <View style={{marginVertical:10}}>
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
                                        color="#000" // Black color for selected option
                                    />
                                    <Text>{option.label}</Text>
                                </View>
                            ))}
                        </RadioButton.Group>
                    </View>
                </View>
            </View>
        );
    };

    // Example data - this can be replaced with dynamically fetched data
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
        // Add more questions here
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#E1F4FF" }}>
                  <> 
                  <CustomHeader title={"Your quiz"}/>
                  </>
            {questions.map((question, index) => renderQuestion(question, index))}
        </ScrollView>
    );
};

export default QuizDetails;


const styles = StyleSheet.create({
    quizView: {
        margin: 15,
        padding: 15,
        flex: 0.3,
        backgroundColor: "#e6ccb2",
        borderRadius: 15
    },
    quizText: {
        // flex: 1,
        flexDirection: "column",
    },
    ansOfQuiz: {
        alignSelf: "center"
    }

})

