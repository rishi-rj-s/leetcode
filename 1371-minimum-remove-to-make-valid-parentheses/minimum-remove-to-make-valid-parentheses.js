/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0, close = 0, flag = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                open++;
                flag++;
            } else if (s[i] === ')' && flag > 0) {
                close++;
                flag--;
            }
        }
        
        let k = Math.min(open, close);
        let ans = '';
        open = k;
        close = k;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                if (open > 0) {
                    ans += '(';
                    open--;
                }
                continue;
            }
            if (s[i] === ')') {
                if (close > 0 && close > open) {
                    ans += ')';
                    close--;
                }
                continue;
            } else {
                ans += s[i];
            }
        }
        return ans;
};