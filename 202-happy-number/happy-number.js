/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
     let c = [];
     function recursion(d) {
          if(d===1){
               return true;
          }
          for (i = 0; i < c.length; i++) {
               if (c[i] == d) {
                    return false;
               }
          }
          c.push(d);
          let a = d.toString().split('');
          // console.log(a);
          let b = 0
          for (i = 0; i < a.length; i++) {
               b += a[i] * a[i];
          }
          console.log(b)
          return recursion(b);
     }
     return recursion(n);
};

isHappy(19)