import React from 'react'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Grid from '@material-ui/core/Grid';

const ChatSubmit = (props) => {
    const {submitHandler , inputHandler , isTyping , inputref} = props
    return (
        <>
            <form onSubmit={submitHandler}>
                <Grid container   alignItems={'center'} style={{padding:'10px'}}>
                    <Grid item xs={1} style={{borderRadius:'100%' , background:'#EDECF1',marginRight:'3px'}}> 
                        <PhotoCameraIcon style={{position:'relative' , left:'25%' , marginTop:'10%'}}/>
                    </Grid>
                    <Grid item xs={10}  >     
                        <input ref={inputref} type="text" rows='1'  wrap="hard" onInput={inputHandler} style={{resize:'none',WebkitOverflowScrolling:'display:none', background:'#ECF3ED' , width:'100%' , marginTop:'5px',wordWrap:'break-word',padding:'10px 20px 10px 20px ',paddingLeft:'20px', border:'none', borderRadius:'999px' ,color:'#ECF3ED',  outline:'0' , color:'black'}} placeholder='Type something'/>           
                    </Grid>
                    <Grid item >
                            
                            {
                                isTyping && (<button type='submit' style={{borderRadius:'100%' ,outline:'none',cursor:'pointer' , padding:'5px',background:'#0084FF', marginLeft:'3px'}}>
                                    <ArrowUpwardIcon size={'large'}/>    
                                </button>)
                            }
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default ChatSubmit
