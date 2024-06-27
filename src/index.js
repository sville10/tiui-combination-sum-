/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive =(candidates, target)=> {
    const resultado = [];
    
    function generar(inicio, sumatoria, convinaciones) {
      if (sumatoria === target) {
        resultado.push([...convinaciones]);
        return;
      }
      if (sumatoria > target) {
        return;
      }
  
      for (let i = inicio; i < candidates.length; i++) {
        convinaciones.push(candidates[i]);
        generar(i, sumatoria + candidates[i], convinaciones);
        convinaciones.pop();
      }
    }
  
    generar(0, 0, []);
    return resultado;
  
    
  }
  /**
   * Backtracking algorithm of finding all possible combination for specific sum.
   *
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
const combinationSum = (candidates, target) => {
    return combinationSumRecursive(candidates, target);
  }

module.exports = combinationSum;