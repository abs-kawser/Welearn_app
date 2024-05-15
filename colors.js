
   const blackColor = "#000000";

   const boldRobotoFont = {
    fontWeight: "bold",
    fontFamily: 'Roboto-bold',
  }; 

export  { blackColor, boldRobotoFont}; 



// Inside your component
const totalPages = Math.ceil(questions.length / questionsPerSet);
const currentPage = Math.floor(currentQuestionIndex / questionsPerSet) + 1;

// Inside your return statement, after rendering questions


<View style={styles.pageNumber}>
    <Text>{currentPage}/{totalPages}</Text>
</View> 
