async function myfun(){
    var size=document.getElementById("size").value
    var algo=document.getElementById("algorithm").value
    arr=[]
    for(i=0;i<size;i++){
        arr[i]=Math.floor(Math.random()*size+1)
    }
    await display(arr,size)
    if(algo=="Bubble Sort"){
        await bubblesort(arr,size)
    }
}
async function display(arr,size){
    var bar_container=document.getElementById("bar-container")
    bar_container.innerHTML=" "
    for(i=0;i<size;i++){
        var bar=document.createElement('div')
        bar.style.width="5px"
        bar.id="id"+i.toString();
        bar.style.height=(arr[i]*4+"px")
        bar.style.background="red"
        bar.style.float="left"
        bar.style.margin="2px"
        bar.style.clear="none"
        bar.style.display="inline"
        bar.innerHTML=" "
        bar_container.appendChild(bar);
    }
}
async function bubblesort(arr,n){
    var i,j;
    for(i=0;i<n;i++){
        for(j=0;j<n-1-i;j++){
            await add_yellow(arr,j)
            if(arr[j]>arr[j+1]){
                await swap(arr,j)   
            }  
            }
        }
    }

async function add_yellow(arr,j){
    await sleep(250)
    var bid1="id"+j.toString()
    var bar1=document.getElementById(bid1)
    var bid2="id"+(j+1).toString()
    var bar2=document.getElementById(bid2)
    bar1.classList.add("yellow-class")
    bar2.classList.add("yellow-class")
    bar1.classList.remove("purple-class")
    bar2.classList.remove("purple-class")
}


async function add_purple(arr,j){
    var bid1="id"+j.toString()
    var bar1=document.getElementById(bid1)
    var bid2="id"+(j+1).toString()
    var bar2=document.getElementById(bid2)
    await sleep(250)
    console.log("purple")
    bar1.classList.add("purple-class")
    bar2.classList.add("purple-class")
    bar1.classList.remove("yellow-class")
    bar2.classList.remove("yellow-class")
    
}

async function swap(arr,j){

    var temp=arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=temp
    await add_purple(arr,j)
    await change_style(arr,j)
}
async function change_style(arr,j){
    var bid1="id"+j.toString()
    var bar1=document.getElementById(bid1)
    var bid2="id"+(j+1).toString()
    var bar2=document.getElementById(bid2)
    await sleep(250)
    var style=bar1.style.height
    bar1.style.height=bar2.style.height
    bar2.style.height=style
}

async function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,1000))
}
