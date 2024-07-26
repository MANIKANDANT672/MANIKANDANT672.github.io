const n=prompt("enter a number");
let c=0;
check(n);
function check(n)
{
    for(let i=2;i<n-1;i++)
    {
        if(n%i==0)
        {
            c=1;
            break;
        }
    }
    if(c==0)
    {
        console.log("prime")
    }
    else
    {
        console.log("not prime")
    }
}