import React , {useState , useRef , useEffect} from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ChatBody from './ChatBody' ;
import ChatSubmit from './ChatSubmit'
import ChatHeader from './ChatHeader'
import demoimg from '../images/demo.jpg'

import getMessage from '../ChatBoatService/message'

const App = () => {
    
    // Stores msg of user
    const [msg , setMsg] = useState('');
  
    // When user is Typing 
    const [isTyping , setIsTyping] = useState(false);
    
    // Fetching msg of Chat-boat
    const [isFetching , setIsFetching] = useState(false);
    
    // msg need to display 
    const [msgList , setMsgList] = useState([]);

    const [messageno, setMessageno] = useState(0);

    const inputref = useRef(null);

    // Ref for div to set scroll
    const messageEnd = useRef(null);

    const inputHandler = (e) => {
        if(e.target.value){
            setMsg(e.target.value)
            setIsTyping(true)
        }
        else{
            setIsTyping(false)
        }
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        setMsgList(  prev => {
            return [...prev,{message:msg,user:'client'}]
        } )

        setIsFetching(true)
        setTimeout( () => {
            setIsFetching(false)
            setMsgList( prev => {
                const data = getMessage(messageno);
                return [...prev,{...data,user:'boat'}]
            })
            setMessageno(prev=>{
                return prev+1
            })
        } , 2000)

        setIsTyping(false)
        inputref.current.value = "";
    }

    const handleScrollHeight = () =>{
        messageEnd.current.scrollIntoView({behavior:"smooth"});
    }

    useEffect( ()=>{
        handleScrollHeight()
    })

    return(
        <>
        <CssBaseline />
        <Container maxWidth="sm" >
            <Typography component="div" style={{ overflow:'hidden', backgroundColor: 'transparent', height:'93vh' , marginTop : '50px' }} >
               
               <Paper style={{background:'#0084FF' , zIndex:'3'}}>
                    <ChatHeader />
                </Paper>
               
               <Paper elevation={0}  style={{ marginTop:'5px' , zIndex:'1',boxSizing:'content-box' , width:'100%', height:'70vh' , background:'white' ,overflow:'hidden'  , overflowY:'scroll'  , position:'relative' , paddingRight:'17px'}}>
                    <ChatBody msgList={msgList} isFetching={isFetching} />
                    <div style={{ float:"left", clear: "both" }}
                       ref={messageEnd}>
                    </div>
               </Paper>

               <Paper elevation={1} style={{background:'white'}}>
                    <ChatSubmit submitHandler={submitHandler} inputHandler={inputHandler} isTyping={isTyping} inputref={inputref}/>
                </Paper>

            </Typography>
        </Container>
        </>
    )
}

export default App 