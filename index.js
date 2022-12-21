function receivesAFunction(thing){
    return thing()
}
receivesAFunction(function(){return Spy;});

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
return function(){}
}