function Person(name) 
{
    this.name = name;
  
    // Fonction classique, Affiche : Bonjour, undefined
    // 'this' fait référence à l'objet global (Window)
    setTimeout(function() {
        console.log('Bonjour, ' + this.name); 
    }, 1000);
  
    // Fonction fléchée, Affiche : Hello, John
    // 'this' fait référence context "new Person('John');"
    setTimeout(() => {
        console.log('Hello, ' + this.name); 
    }, 2000);

}

const john = new Person('John');