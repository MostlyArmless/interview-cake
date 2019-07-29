// From this question: https://www.interviewcake.com/question/python/matching-parens?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23232:%20Parenthesis%20Matching&utm_medium=email&utm_medium=email&__s=z9taxyy467c6cqtf9rwm

export function findMatchingParenthesis(str: string, openParenIndex: number) {
    let parenDepth = 0;
    
    // Need to start at the beginning of the string just in case our set of parens isn't the first
    let targetParenDepth = null;
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === '(') {
            if (i === openParenIndex) {
                targetParenDepth = parenDepth;
            }
            parenDepth++;
        }
        else if (str[i] === ')') {
            parenDepth--;
        }
        if (parenDepth === targetParenDepth) {
            return i;
        }
    }
}