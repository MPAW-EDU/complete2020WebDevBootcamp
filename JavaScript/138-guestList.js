

const guestList = ['me','myself','I'];

const CheckGuestList = (gList, name) => {
    console.log(name)
    return gList.includes(name)?`You may enter, ${name}.`:`You may not enter, ${name}.`;
}

console.log(CheckGuestList(guestList,"Mike"));
console.log(CheckGuestList(guestList,"me"));