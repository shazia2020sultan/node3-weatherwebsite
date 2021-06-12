console.log('client side javascript file is loaded')

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

//messageOne.textContent='From javascript'
messageOne.textContent='Loading...'
messageTwo.textContent=''

weatherForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const location = search.value
        fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
                
            }
        })
            
        })
     console.log('location')
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })

})
})
