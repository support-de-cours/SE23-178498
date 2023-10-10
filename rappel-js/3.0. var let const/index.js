// var a = "AA";
// let i = "BB";
// let d = "DD";
// console.log( a );

// for (let i=0; i<5; i++)
// {
//     console.log( d );
// }

// console.log( '----' );
// console.log( i );


let a = "AA";
const e = "EE"
console.log(e);

{
    {
        let b = "BB";
        let c = "CC";
        var d = "DD";
        console.log(c);
        c = "CCCCCCC";
        // e = "EEEEE";
        {
            {
                console.log( a );
                console.log( b );
                console.log( e );
            }
        }
        console.log(c);
    }

    console.log(a);
    console.log(d);
}
console.log( e );
