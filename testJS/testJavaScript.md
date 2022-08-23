# Test de javaScript

## Variables y operaciones
1. Responde las siguientes preguntas:
    * Que es una variable y para que sirve?
        Las variables son espacios en memoria, el cual pueden almacenar valores como
            - Number
            - String
            - boolean
            - Undefind
            - Obj
            - Array
    * Cual es la diferencia entre declarar e inicializar una variable?
        Incializar una variable es indicar que tipo de scope tendra y el valor que se le asignara
        Declarar una variable es indicar el tipo de scoope que tendra mas no se le indica el valor
    * Cual es la diferencia entre sumar numeros y concatenar string?
        Sumar numero es la accion matematica de sumar dos valores
        Concatenar string es conectar una cadena de string con otra para que se puedan leer como una sola linea
    * Cual es el operador que me permite sumar o concatenar?
        El operador es +

2. Determine el nombre y tipo de dato para almacenar en variable la siguietne informacion:
    * Nombre
        Seria tipo String en este caso con el valor "Antony"
    * Apellido
        Seria tipo String en este caso con el valor "Chuquival Huallanca"
    * Nombre de usuario en platzi
        Seria tipo String en este caso con el valor "Antony Chuquival"
    * Edad
        Seria tipo Number en este caso con el valor 22
    * Correo Electronico
        Seria tipo String en este caso con el valor "achuquival@gmail.com"        
    * Mayor de Edad
        Seria tipo Boolean en este caso con el valor *TRUE*
    * Dinero ahorrado
        Seria tipo Number en este caso con el valor 900
    * Deudas
        Seria tipo Number en este caso con el valor de 400
3. Traduce a codigo JavaScript las variables del ejemplo anterior
    ```javascript
        let nombre = 'Antony'
        let apellido = 'Chuquival Huallanca'
        let userName = 'Antony chuquival'
        let edad = 22
        let email = 'achuquival@gmail.com'
        let mayoEdad = true
        let dineroAhorrado = 900
        let deudas = 100
    ```
4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
    * Nombre completo
        ```javascript
            let fullName = `${nombre} ${apellido}` 
            console.log(fullName)
        ```
    * Dniero real
        ```javascript
            let dineroReal = dineroAhorrado - deudas
            console.log(dineroReal)
        ```

## Funciones

1. Responde las siguientes preguntas
    * Que es una funcion?
        Es un bloque de acciones que nos permite reutilizarlo cuando querramos
    * Cuando me sirve una funcion en mi codigo?
        Cuando tengamos un bloque de codigo que seria repetitivo escribirlo completo
    * Cual es la diferencia entre parametos y argumentos de una funcion?
        los parametros serian las variables que requiere nuestra funcion para poder ejecutarse y los argumentos son los valores que le pasamos
2. Convierte el siguiente codigo en una funcion, pero, cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion
    * Codigo de inicio:
        ```javascript
        const name = "Juan David";
        const lastname = "Castro Gallego";
        const completeName = name + lastname;
        const nickname = "juandc";

        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
        ```
    * Codigo con *Funcion*:
        ```javascript
        const name = "Juan David";
        const lastname = "Castro Gallego";
        const nickname = "juandc";

        function presentacion(nombre, apellido, apodo){
            const completeName = nombre + apellido;
            console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${apodo}.`);
        }
        presentacion(name, lastname, nickname)
        ```

## Condicionales

1. Responde las sioguientes preguntas
    * Que es una condicional?
        Es una exprecion que nos permite ver si es verdadero o falso
    * Que tipos de condicionales existen en javaScrit y cuales son sus diferencias?
        Esta el *true* que tendria el valor de verdadero y el *false* que tendria como valor el falso que no se cumple una afirmacion
    * Puedo combinar funciones y condicionales
        Si, para poder validar si ciertas aciones se cumplieron para que se pueda ejecutar el codigo
2. Replique el comportamiento del siguiente codigo que usa la sentencia if, ekse y else if:
    * Antes del codigo:
        ```javascript
        const tipoDeSuscripcion = "Basic";

        switch (tipoDeSuscripcion) {
           case "Free":
               console.log("Solo puedes tomar los cursos gratis");
               break;
           case "Basic":
               console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
               break;
           case "Expert":
               console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
               break;
           case "ExpertPlus":
               console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
               break;
        }
        ```
    * Convertido a if:
        ```javascript
        const tipoDeSuscripcion = "Basic";

        if(tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }else if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }else if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }else if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }else{
            console.log('ingrese bien sus plan')
        }
        ```
3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if:

    * Antes del sin else if:
        ```javascript
        const tipoDeSuscripcion = "Basic";

        if(tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }else if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }else if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }else if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }else{
            console.log('ingrese bien sus plan')
        }
        ```
    * Despues:
        ```javascript
        const tipoDeSuscripcion = "Basic";

        if(tipoDeSuscripcion === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }if(tipoDeSuscripcion === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }if(tipoDeSuscripcion === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }if(tipoDeSuscripcion === "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
        ```
## Ciclos
1. Responde las siguientes preguntas:
    * Que es un ciclo?
        Es una porcion de codigo que se repite varias veces hasta que se cumpla la condicion que se le de
    * Que tipo de ciclos existen en javaScript?
        Se encuentra el for, while, do
    * Que es un ciclo infinito y por que es un problema?
        Es cuando un ciclo no cuenta con una condicion claro o nula el cual hace que siga realizando iteraciones, y ciclos de manera infinita, el cual cuasa diferentes inconvenientes con el programa que estemos realizando y con el computador
    * Puedo mesclar ciclos con condicionales?
        Oviamente que si ya que ese seria el parametro que limite los cilos
2. Replique el comportamiento de los sigueintes ciclos *for* utilizando *while*:
    * Codigo con *for*:
        ```javascript
        for (let i = 0; i < 5; i++) {
            console.log("El valor de i es: " + i);
        }

        for (let i = 10; i >= 2; i--) {
            console.log("El valor de i es: " + i);
        }
        ```
    * Codigo con *while*:
        ```javascript
        let i = 0
        while (i < 5) {
            console.log("El valor de i es: " + i);
            i++
        }
        let e = 10
        while (e>=2) {
            console.log("El valor de i es: " + i);
            i--
        }
        ```
3. Escribe un codigo en JavaScript que le pregunte a los usuarios cuanto es 2 + 2. Si responden bien mostramos un mensaje de felicitaciones, pero si reponden mal, volvemos a empezar
    ```javascript
    let respuesta
    while (respuesta != 4) {
        let pregunta = prompt('Cuanto es 2 + 2');
        respuesta = pregunta
        if(pregunta != 4){
            alert("sigue intentado")
        }else{
            alert("Felicidades")
        }
    }
    ```
## Lista
1. Responde las siguientes preguntas:
    * Que es un array?
        Es una lista que puede contener objetos, numeros, string
    * Que es un objeto?
        Segun ella, yo :(
    * Cuando es mejor usar objetos o arrays?
        cuando se necesita iterar o agrupar una serie de valores
    * Puedo mezclar arrays con objetos o incluso objetos con arrays?
        Claro ya que se pueden sacar diferentes funcionalidades al momento de juntar
2. Cre una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento:
    ```javascript
    const array = ["Antony", "jose", "Dean", "Luis", "Robertho"]
    function primerElement(array){
        return array[0]
    }
    console.log(primerElement(array))
    ```
3. Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno:
    ```javascript
    const array = ["Antony", "jose", "Dean", "Luis", "Robertho"]
    function primerElement(array){
        array.map(k => console.log(k))
    }
    primerElement(array)
    ```
4. Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno:
    ```javascript
    const obj = {
    name1: "antony",
    name2: "jose",
    name3: "dean",
    name4: "luis",
    name5: "robertho",
    }
    function primerElement(obejeto){
        Object.entries(obejeto).map(([key, value]) => {
            console.log(value)
        })
    }
    primerElement(obj)
    ```