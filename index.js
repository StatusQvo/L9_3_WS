const toSetRegistrFreeName = ()=>{
    let coffeeName = prompt('Поиск кофе по названию:')
        coffeeName = coffeeName?.trim().toLowerCase();
    return coffeeName[0].toUpperCase() + coffeeName.substring(1)

}

function checkArrayForCoffee() {
    const coffees = ["Latte", "Cappuccino", "Americano"];
let coffee = toSetRegistrFreeName()
let number = 1 + coffees.findIndex((item)=>{return coffee === item})

    if(number){
        alert(`Держите ваш любимый кофе ${coffee}. Он ${number}-й по популярности в нашей кофейне.`)
} else alert('К сожалению, такого вида кофе нет в наличии')
}


checkArrayForCoffee()