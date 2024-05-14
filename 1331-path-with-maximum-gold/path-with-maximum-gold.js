/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let maxGold = 0

    const dfsBacktrack = (i,j,currentGold) =>{
        if(i<0 || j<0 || i>=row || j>=col || grid[i][j]==0){
            return 0;
        }//out of bound conditions

        const goldInCurrentCell = grid[i][j]
        currentGold += goldInCurrentCell

        //mark Visited 
        grid[i][j] = 0

        //update Max Gold
        maxGold = Math.max(maxGold , currentGold)

        //traverse all dir 
        dfsBacktrack(i+1,j,currentGold)
        dfsBacktrack(i-1,j,currentGold)
        dfsBacktrack(i,j+1,currentGold)
        dfsBacktrack(i,j-1,currentGold)

        //backtrack
        grid[i][j] =goldInCurrentCell
    }


    //main 
    for(let i=0 ; i<row ; i++){
        for(let j=0 ; j<col ; j++){
            if(grid[i][j] !== 0){
                dfsBacktrack(i, j, 0)
            }
        }
    }

    return maxGold
};