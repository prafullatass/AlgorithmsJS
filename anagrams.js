//Anagrams are words or phrases that contain
//the same number of characters.

//-------- for single word -----------------

// const ananganam  = (str1, str2) => {
//     let str1obj = {};
//     for(let char of str1) {
//         str1obj[char] = str1obj[char] + 1 || 1;
//     }
//     let str2obj = {};
//     for(let char of str2) {
//         str2obj[char] = str2obj[char] + 1 ||1;
//     }
//     for(let char in str1obj)
//     {
//         if(str1obj[char] !== str2obj[char])
//             console.log(char, "no");
//         console.log(char);
//     }
//     console.log(str1obj);
// }

// ananganam("ojasvii", "asd");

const anaganam1 = (str1,str2) => {
    console.log(str1.length);
    if (str1.length !== str2.length)
        return false;

    console.log(str2.split('').sort().join());
        if(str1.split('').sort().join() === str2.split('').sort().join())
            return true;
        else
            return false;
}
console.log(anaganam1('oju sonu','jou nuso'));
console.log(anaganam1("hello","world"));