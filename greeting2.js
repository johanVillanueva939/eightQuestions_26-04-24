function greeting(name) {
    let firstletter=name.charAt(0).toUpperCase()
    let testName=name.replace(name.charAt(0),firstletter)

    if (!/^[a-zA-Z]+$/.test(testName)) {
    return "the name as a caracter special"
    }else if (testName.length<2) {
    return "the name is less that two letters"
    }else
    return "hello "+ testName
    }

console.log(greeting("Johan"))
