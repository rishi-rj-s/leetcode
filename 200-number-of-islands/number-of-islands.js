/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (visited[i][j]) continue;
        if (grid[i][j] === '1') {
          ans++;
          destroyLand(grid, i, j, visited);
        }
      }
    }
    return ans;
};

function destroyLand(grid, i, j, visited) {
    if (visited[i][j]) return;
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length) {
      grid[i][j] = '0';
      visited[i][j] = true;

      if (i > 0 && grid[i - 1][j] === '1') destroyLand(grid, i - 1, j, visited);
      if (i < grid.length - 1 && grid[i + 1][j] === '1') destroyLand(grid, i + 1, j, visited);
      if (j > 0 && grid[i][j - 1] === '1') destroyLand(grid, i, j - 1, visited);
      if (j < grid[0].length - 1 && grid[i][j + 1] === '1') destroyLand(grid, i, j + 1, visited);
    }
};