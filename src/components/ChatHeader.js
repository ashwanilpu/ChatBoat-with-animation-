import React from 'react'
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

const ChatHeader = () => {
    return (
        <>
            <Grid container spacing ={1} alignItems={'center'} >
                <Grid item xs={1} style={{marginLeft:"10px"}}>
                    <MenuIcon />
                </Grid>
                <Grid item xs={9} >
                    <h2 style={{textAlign:'start' , alignItems:'center'}}>Chat</h2>
                </Grid>
            </Grid> 
        </>
    )
}

export default ChatHeader
