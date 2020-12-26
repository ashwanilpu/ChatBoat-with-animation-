import demoimg from '../images/demo.jpg'

const messages =[
    {message:'Hi i am chat boat. \n How can i help you ?'},
    {message:'Is This your parcle that you left their' , pic:demoimg },
    {message:"we will bring ur parcel don't worry"},
    {message:'What is your address so we can deliver it to you.'},
    {message:'Thanks for coming to us. we will deliver to you.'}
]



const getMessage = ( no ) => {
    const index = no % messages.length ;
    return messages[index] ;
}

export default getMessage ;