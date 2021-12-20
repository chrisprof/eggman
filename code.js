var bal=0;
            var mult=1;
            var price=1000;
            var item=2;
            var hat = false;
            var tux = false;
            var mus = false;
            var mon = false;
            var prices = [20000000,300000000,1000000000000,999999999999999999];
            var isBought=[false,false,false,false];
            var isSafari = window.safari !== undefined;

            

            function getRandomInt(max)
            {
                return Math.floor(Math.random() * max);
            }
            
            function btnClicked()
            {
                
                bal+=mult;
                document.getElementById("coins").innerHTML=bal;
            }
            
            
            function buy()
            {
                
                if(bal>=price)
                {
                
                    mult *= item;
                    bal-=price;
                    document.getElementById('coins').innerHTML=bal;

                    item*=2;
                    price*=mult;
                    
                    while(price>1000*mult)
                    {
                        price/=2;
                    }
                    
                    checkShop();
                }
                
                else
                {
                    poor();
                }
                
            }
            
            function checkShop()
            {                         
               document.getElementById('buyBtn').innerHTML="BUY: "+price+"c";
               document.getElementById('shopbtn1').innerHTML=item+"x";
               
            }
            
            function poor()
            {
                alert("Not enough coins.");
            }
            
            
            function toggle(a)
            {
                switch(a){
                
                    case "hat":
                        if(hat)
                        {
                            hat=false;
                        }
                        
                        else
                        {
                            hat=true;
                        }
                        break;
                        
                    case "tux": 
                        if(tux)
                        {
                            tux=false;
                        }
                        
                        else
                        {
                            tux=true;
                        }
                        break;
                        
                    case "mus":
                        if(mus)
                        {
                            mus=false;
                        }
                        
                        else
                        {
                            mus=true;
                        }
                        break;
                        
                    case "mon":
                        if(mon)
                        {
                            mon=false;
                        }
                        
                        else
                        {
                            mon=true;
                        }
                        break;
                        
                }
                
            }
            
            function buyItem(a)
            {
                if(a=="tux")
                {
                    if(isBought[2])
                       {
                           toggle(a);
                       }
                    else
                    {
                        if(bal >= prices[2])
                        {
                            tux=true;
                            isBought[2]=true;
                            bal-= prices[2];
                            document.getElementById("tux").innerHTML = "BOUGHT!     TOGGLE";
                        }
                        
                        else
                        {
                            poor();
                        }
                    }
                    
                }
                
                if(a=="hat")
                {
                    if(isBought[0])
                       {
                           toggle(a);
                       }
                    else
                    {
                        if(bal >= prices[0])
                        {
                            hat=true;
                            isBought[0]=true;
                            bal-= prices[0];
                            document.getElementById("hat").innerHTML = "BOUGHT!     TOGGLE";
                        }
                        
                        else
                        {
                            poor();
                        }
                    }
                    
                }
                
                if(a=="mus")
                {
                    if(isBought[1])
                       {
                           toggle(a);
                       }
                    else
                    {
                        if(bal >= prices[1])
                        {
                            mus=true;
                            isBought[1]=true;
                            bal-=prices[1];
                            document.getElementById("mus").innerHTML = "BOUGHT!     TOGGLE";
                        }
                        
                        else
                        {
                            poor();
                        }
                    }
                    
                }
                
                if(a=="mon")
                {
                    if(isBought[3])
                       {
                           toggle(a);
                       }
                    else
                    {
                        if(bal >= prices[3])
                        {
                            mon=true;
                            isBought[3]=true;
                            bal-=prices[3];
                            document.getElementById("mon").innerHTML = "BOUGHT!     TOGGLE";
                        }
                        
                        else
                        {
                            poor();
                        }
                    }
                    
                }
                
                
               check();
               updateBal();
            }
            
            function updateBal()
            {
                document.getElementById('coins').innerHTML=bal;
            }
            
            function check()
            {
                if(tux)
                {
                    document.getElementById('tux1').style.visibility = "visible"
                }
                
                else{
                    document.getElementById('tux1').style.visibility = "hidden"
                }
                
                if(mus)
                {
                    document.getElementById('mus1').style.visibility = "visible"
                }
                
                else{
                    document.getElementById('mus1').style.visibility = "hidden"
                }
                
                if(hat)
                {
                    document.getElementById('hat1').style.visibility = "visible"
                }
                
                else{
                    document.getElementById('hat1').style.visibility = "hidden"
                }
                
                if(mon)
                {
                    document.getElementById('mon1').style.visibility = "visible"
                }
                
                else{
                    document.getElementById('mon1').style.visibility = "hidden"
                }
                
            }
            
            
            function startGame()
            {
                checkShop();
                if(isSafari)
                {
                    document.getElementById('title').style.fontSize = 125;
                }

                else{
                     document.getElementById('title').style.fontSize = 50;

                }
            }      
