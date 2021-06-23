function titleCase(str) {
    const ans = [];
   let strArr = str.toLowerCase().split(" ");
   for (let i = 0; i < strArr.length; i++){
       strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
       if (strArr[i] == strArr[strArr.length -1]){
            ans.push(strArr[i])
       } else {
           ans.push(strArr[i] + " ");
       }
   }
   console.log(ans.join(""));
}
  
titleCase("I'm a little tea pot");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
titleCase("sHoRt AnD sToUt");