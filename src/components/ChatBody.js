import React from 'react'
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import {bounce} from 'react-animations';
import styled , {keyframes} from 'styled-components'

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;

const ChatBody = (props) => {
    const {msgList , isFetching} = props
    return (
        <>
        {
            msgList && msgList.length > 0 && 
            msgList.map( (m , index) => {
                const position = m.user === 'client' ? 'flex-end' : 'flex-start' ;
                return (
                m.user==='client' ? 
                <Bounce>
                    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                        <div style={{display:'flex',justifyContent:'flex-end' }}>
                            <Grid key = {index} container justify={position} style={{ width:'80%'  , marginTop:"10px"}}> 
                                <p style={{background:'#0084FF', wordBreak:'break-all' , clear:'both' , float:'left' , wordWrap:'break-word' , alignItems:'center' ,  padding:'8px', color:'white' , borderRadius:'12px 12px 0px 12px', whiteSpace:'pre-line'} }> {m.message} </p> 
                            </Grid>
                        </div>   
                    </Slide>
                </Bounce> :
                    <Bounce>
                        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                            <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
                                <Grid key = {index} container  style={{ width:'80%' , marginLeft:'10px' , marginTop:"10px"}}> 
                                    <p style={{ background:'#E9E8EE', wordBreak:'break-all', clear:'both' , float:'left' , wordWrap:'break-word' , alignItems:'center' ,  padding:'8px', color:'black' , borderRadius:'12px 12px 12px 0px' }}> {m.message}</p>
                                    
                                </Grid>
                                <Grid key = {index} container  style={{ width:'80%' , marginLeft:'10px' , marginTop:"10px"}}> 
                                    {m.pic && <img src={m.pic} style={{width:'80%'}}></img>}
                                </Grid>
                            </div>
                        </Slide>
                    </Bounce>
                )

            })  
        }
        { isFetching &&  <Grid  container  style={{ width:'80%' , marginLeft:'10px' , marginTop:"10px"}}> 
        <p style={{ background:'#E9E8EE', wordBreak:'break-all', clear:'both' , float:'left' , wordWrap:'break-word' , alignItems:'center' ,  padding:'8px', color:'black' , borderRadius:'12px 12px 12px 0px' }}>Replying...</p>
        </Grid> }
        </>
    )
}

export default ChatBody
