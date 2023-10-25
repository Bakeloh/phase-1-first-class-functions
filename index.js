
function run(sprint, jog) {
    console.log(`run,${sprint}`);
    cancelIdleCallback();   
}
// function walk(){
//     console.log("walk");
// }


function receivesAFunction(volvo = car) {
    volvo()
}


function returnsANamedFunction() {
    return receivesAFunction;
}


