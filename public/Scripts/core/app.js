// IIFE - imidiately invoked function expression
(function(){

    function Start(){
        console.log("App starting");
        Main();
    }
    function Main(){
        console.log("App started");
    }

    window.onload = Start;
})();