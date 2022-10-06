const hello = <h1>Hello, World!</h1>

function getMessage(name) {
    return <h1>Hello, {name}</h1>
}
getMessage('Giacomo')
//OPPURE (Questa sono sicura che è giusta ma non è una funzione)
const firstName = 'Jimmy'
const greeting = <h1>Hello, {firstName}!</h1>
//OPPURE
const firstName2 = 'Jimmy';
function greeting2(name) {
   return <h1>Hello, {name}</h1>
}
greeting2(firstName2);
 //OPPURE
 const greetings = name => 'Hello, ' + name
 const result = <h1>{greetings('Jimmy')}</h1>

//ESRCIZIO jsx-03 
//Se la variabile name non viene passata alla funzione,
//viene renderizzato solo 'Hello,'

//ESERCIZIO jsx-04 se la nostra variabile contenesse una jsx expression invece 
 //che una stringa
 const namejsx = <h1>Jimmy</h1>;
 //verrebbe tradotto da un transpiler in js così
 const traduzione = _jsx('p', {children:'Jimmy'})
 const otherGreet = <h1>Hello, {traduzione}</h1>
 

function Sum(a,b){
    return <h2>{a+b}</h2>
}
Sum(11,22)

//Oppure 
const sum = (a,b)=>a+b
const message = <h2>{sum(11,22)}</h2>