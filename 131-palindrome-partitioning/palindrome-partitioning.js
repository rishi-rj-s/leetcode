/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ans = [];
    const candidate = [];

    // This function checks if a substring of 's' is palindromic
    const is_palindrome = (s, l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    const solve = (s, i, previous) => {
        if (i === s.length) {
            if (is_palindrome(s, previous, i)) {
                ans.push([...candidate]);
            }
        } else {
            // At each step we have 2 possibilities

            // 1) Partition the string here and see where this leads us
            // Proceed if and only if the partition generates a palindromic substring
            if (is_palindrome(s, previous, i)) {
                candidate.push(s.substring(previous, i+1));
                solve(s, i + 1, i + 1);
                candidate.pop();
            }

            // 2) Do NOT partition the string here and see where this leads us
            solve(s, i + 1, previous);
        }
    }

    solve(s, 0, 0);
    return ans;
};