function typeOfX (x) 
{
    return typeof(x) === "number" ? "x - это число"
    :typeof(x) === "string" ? "x - это строка"
    :typeof(x) === "boolean" ? "x - это логический тип"
    :"Тип не определен";
}

console.log(typeOfX(13));
console.log(typeOfX("fasaf"));
console.log(typeOfX(true));