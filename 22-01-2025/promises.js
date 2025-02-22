function fetchUserData(userid) {
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = {id:'12C9', name: 'Paarthiv', type: 'normal'};
            resolve(user);
        },1000);
     });   
}

function fetchUserSettings(userType) {
    return new Promise((resolve,reject)=>{
        console.log("Fetching settings for user type : ", userType);
        const settings = userType === 'premium'
        ? {theme:"dark", Notification:true}
        : {theme:"light", Notification:false};
        resolve(settings);
    });
}
//using async function
// async function display() {
//     let user = await fetchUserData("12c9");
//     let settings = await fetchUserSettings(user.type);
//     console.log(user);
    
//     console.log(settings);
// }
// display();

fetchUserData()
.then(user=>fetchUserSettings(user.type))
.then(settings=>{console.log(settings);})
.catch(error=>console.error());
