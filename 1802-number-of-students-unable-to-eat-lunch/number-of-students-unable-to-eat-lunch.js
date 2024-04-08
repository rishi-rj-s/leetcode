/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const count = [0, 0];
    students.forEach(student => count[student]++);
    
    for (let i = 0; i < sandwiches.length; ++i) {
        if (count[sandwiches[i]] === 0)
            return sandwiches.length - i;
        count[sandwiches[i]]--;
    }
    
    return 0;
};