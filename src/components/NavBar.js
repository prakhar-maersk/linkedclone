import React, { useState } from "react";

const navlink={
    textAlign:'center',
    fontSize:12,
    minWidth:60,
    padding:6,
    marginLeft:10,
    marginRight:10,
}

const selected={
    textAlign:'center',
    fontSize:12,
    minWidth:60,
    padding:6,
    marginLeft:10,
    marginRight:10,
    borderBottom:"2px solid black",
}

function NavBar(props){

    const [text,setText]=useState("", )


    return(
        <div style={{
            backgroundColor: 'white',
                position: 'fixed',
                height: 50,
                width:'100%',
                top:0
        }}>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                maxWidth:1100,
                margin:'auto',
                }}>
                <div>
                    <img src="logo.png" alt="logo" height="35"/>
                </div>
                <div style={{flex:1}}>
                    <input placeholder='Search'style={{
                        height:32,
                        width:300,
                        paddingLeft:20,
                        border:'0px',
                        borderRadius:5,
                        backgroundColor:'#EEF3F8',
                        marginLeft:10
                    }}/>
                </div>
                <div style={props.content==='Home'?selected:navlink} onClick={()=>props.setContent('Home')}>
                    <img src="home.png" alt=" " height="20px" />
                    <br/>
                    Home
                </div>
                <div style={props.content==='My Network'?selected:navlink} onClick={()=>props.setContent('My Network')}>
                    <img src="home.png" alt=" " height="20px" />
                    <br/>
                    My Network
                </div>
                <div style={props.content==='Jobs'?selected:navlink} onClick={()=>props.setContent('Jobs')}>
                    <img src="home.png" alt=" " height="20px" />
                    <br/>
                    Jobs
                </div>
                <div style={props.content==='Messaging'?selected:navlink} onClick={()=>props.setContent('Messaging')}>
                    <img src="home.png" alt=" " height="20px" />
                    <br/>
                    Messaging
                </div>
                <div style={props.content==='Notifications'?selected:navlink} onClick={()=>props.setContent('Notifications')}>
                    <img src="home.png" alt=" " height="20px" />
                    <br/>
                    Notifications
                </div>
                <div style={props.content==='Me'?selected:navlink} onClick={()=>props.setContent('Me')}>
                    <img src="home.png" alt=" " height="20px" />
                    <br/>
                    Me
                </div>
            </div>
        </div>
    )
}

export default NavBar