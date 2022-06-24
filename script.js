if(screen.availWidth<740)
{
    window.location.href="/eggman/mobile.html"
}

else{
    console.log(screen.width)
}

let items = [
    ['Tuxedo' ,10000],
    ['Monocle',50000],
    ['Tophat' ,250000],
    ['Richmug',1000000],
    ['Chicky',15000000]
]

if(!localStorage.getItem('balance') || !localStorage.getItem('multiplier') || !localStorage.getItem('items') || !localStorage.getItem('multiplierPrice'))
{
    let x=[]
    items.forEach(element => {
        x.push(false)
    })
    localStorage.setItem('balance',0)
    localStorage.setItem('multiplier',1)
    localStorage.setItem('items','['+x+']')
    localStorage.setItem('multiplierPrice',100)
    localStorage.setItem('multiplierItem',2)    
}

function checkShop()
{                         
   document.getElementById('buy-btn').innerHTML="BUY: "+localStorage.getItem('multiplierPrice')+"c";
   document.querySelector('.multiplier-container').innerHTML=localStorage.getItem('multiplierItem')+"x";
   
}

function poor()
{
    alert('poor egg!')
}

function updateCoins()
{
    document.getElementById('bal').innerHTML='Coins: '+localStorage.getItem('balance')
}


function toggle(item)
{
    if(document.getElementById(items[item][0]).style.opacity==0)
    {
        document.getElementById(items[item][0]).style.opacity=1    
    }

    else{
        document.getElementById(items[item][0]).style.opacity=0    
    }
}

console.log('hi')

function buyMult()
{
    if(Number(localStorage.getItem('balance'))>=Number(localStorage.getItem('multiplierPrice')))
    {
        localStorage.setItem('multiplier',Number(localStorage.getItem('multiplier')) * Number(localStorage.getItem('multiplierItem')));
        localStorage.setItem('balance',Number(localStorage.getItem('balance'))-Number(localStorage.getItem('multiplierPrice')));
    
        localStorage.setItem('multiplierItem',Number(localStorage.getItem('multiplierItem'))*2);
        localStorage.setItem('multiplierPrice',Number(localStorage.getItem('multiplierPrice'))*Number(localStorage.getItem('multiplier')));
                        
        while(Number(localStorage.getItem('multiplierPrice'))>250*Number(localStorage.getItem('multiplier')))
        {
            localStorage.setItem('multiplierPrice',localStorage.getItem('multiplierPrice')/2);
        }
    
        checkShop()
        updateCoins()
    }

    else{
        poor()
    }
                    
}

function buy(id)
{

    let myArr =JSON.parse(localStorage.getItem('items'))
    if(myArr[id]==true)
    {
        toggle(id)
    }
    else{
        if(Number(localStorage.getItem('balance'))>=items[Number(id)][1])
        {
            myArr[id]=true
            localStorage.setItem('balance',localStorage.getItem('balance')-items[Number(id)][1])
            localStorage.setItem('items','['+myArr+']')
            document.getElementById(items[Number(id)][0]).style.opacity=1    
            document.getElementById(id).innerHTML=items[Number(id)][0]+': TOGGLE'
        }

        else{
            poor()
        }
    }
}

function make_item(name,price,id)
{
    let div = document.getElementById('avatar-shop')
    let btn = document.createElement('btn')
    btn.className="avatar-item"
    btn.id=id
    btn.innerHTML=name+": "+price+"c"
    div.appendChild(btn)
    const onclick=btn.addEventListener('click',function(){
        buy(id)
    })
}

function startGame(){
    for(x in items)
    {
        make_item(items[x][0],items[x][1],x)
    }

    let iter=0
    JSON.parse(localStorage.getItem('items')).forEach(element => {
        if(element==true)
        {
            document.getElementById(items[iter][0]).style.opacity=1    
            document.getElementById(iter).innerHTML=items[iter][0]+': TOGGLE'
        }
        iter++
    });
    updateCoins()
    checkShop()
}

function addclick(){
    localStorage.setItem('balance',Number(localStorage.getItem('balance'))+1*JSON.parse(localStorage.getItem('multiplier')))
    updateCoins()
    console.log(bal)
}

startGame()