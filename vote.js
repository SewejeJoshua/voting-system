let cName = []; let obj = {}; let enter; let conf; let userEnter; let confEnter; let anyVoters; 
 const admin = () => { 
    enter = prompt('Admin, enter candidate names'); 
    cName.push(enter); 
    cName.forEach(element => { obj[element] = 0;});
     conf = confirm('Any candidates left'); 
     if (conf) { 
        admin();
    }; 
}; 
const vote = () => { 
    confEnter = prompt('Enter candidate name to vote'); 
    if (cName.includes(confEnter)) { 
        obj[confEnter]++ }; 
        anyVoters = confirm('Any voters left');
         if (anyVoters) { 
            vote(); 
        } else {  
            let result = Object.entries(obj).sort((a, b) => b[1] - a[1]); 
            let winner = result[0]; 
<<<<<<< HEAD
              if (winner = winner) { console.log('We have more than 1 candidates with same votes');} console.log(`${winner[0]} is the new president with ${winner[1]} votes`);
         };  
=======
            console.log(`${winner[0]} is the new president ${winner[1]}`);
         }; 
>>>>>>> c8bec74aa8057f75a7092ffc6dbdd64cdd3c3bd5
};