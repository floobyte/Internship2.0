function checkPassFail(examScore, assignmentScore, allAssignmentsCompleted) {
    const totalScore = examScore + assignmentScore;
  
    if (totalScore >= 50 && allAssignmentsCompleted) {
      return "Pass";
    } else if (totalScore >= 50 || allAssignmentsCompleted) {
      return "Conditional Pass";  
    } else {
      return "Fail";
    }
  }
  
  // Example usage:
  console.log(checkPassFail(30, 20, true));   
  