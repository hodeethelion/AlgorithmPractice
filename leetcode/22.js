/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const ansList = [];
  function recursion(openN, closeN, parenthesis) {
    if (parenthesis.length === 2 * n) {
      if (parenthesis.split("(").length == parenthesis.split(")").length) {
        ansList.push(parenthesis);
      }
      return;
    }
    if (openN > closeN) {
      recursion(openN, closeN + 1, parenthesis + ")");
      recursion(openN + 1, closeN, parenthesis + "(");
    } else if (openN == closeN) {
      recursion(openN + 1, closeN, parenthesis + "(");
    }
  }
  recursion(0, 0, "");
  return ansList;
}
