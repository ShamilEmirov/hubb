let users = 'Samil Ceyhun Oktay Sergiyye'
console.log(users);
users = users.split(" ");
console.log(users);

let dltName = document.getElementById("dltName");
dltName.addEventListener('change', () => {
    users = users.filter((name) => {
        return name !== dltName.value;
    })
    console.log(users);
    users = users.join(" ");
    console.log(users);
})
