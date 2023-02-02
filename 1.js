let value = prompt("Введите значение");
value = +value;

if (typeof(value) === "number" && !isNaN(value))
{
    console.log(value % 2 === 0 ? "Число четное": "Число нечетное");
}
else
{
    console.log("Упсс, вы ошиблись");
}