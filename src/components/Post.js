import React , { useState } from 'react';

const container={
    backgroundColor:'white',
    width:300,
    borderRadius:8,
    color:'black',
    width:650,
    // margin:'10px',
    margin:'auto',
    marginButtom:'10px',
    marginTop:'10px',

}

function Post({author,content,time,likeCount}) {

    const [like,setlike]=useState(false);

    return (
        <div style={container}>
            <div style={{display:'flex',alignItems:'center', paddingBottom:'10px'}}>
                <div style={{paddingLeft:10,paddingRight:10}}>
                    <img src="avtar1.jpg" alt="" height={50} style={{ borderRadius:"50%"}}/>    
                </div>    
                <div>
                    <spam>{author.name}</spam>
                    Hello
                    <br/>
                    {author.title}
                    <br/>
                    {time}
                </div>
            </div>
            <div style={{textAlign:'justify', padding:'10px'}}>
                    {content}
            </div>
            <div style={{padding:'10px',textAlign:'center'}}>
                <img src="post1.jpg" width="50%" alt='' />
            </div>

            <div style={{textAlign:'justify', padding:'10px', color:'GrayText'}}>
                {like ? (<span>You and {likeCount+1} other liked the post</span>):<span>{likeCount} people liked the post</span>}
                
            </div>

            <div style={{padding:'10px',textAlign:'center', display:'flex'}}>
                <div style={{flex:1,cursor:'pointer',color:like?('blue'):('black')}} onClick={()=>setlike(prevLike=>!prevLike)}>Like</div>
                <div style={{flex:1,cursor:'pointer'}}>Comment</div>
                <div style={{flex:1,cursor:'pointer'}}>Share</div>
                <div style={{flex:1,cursor:'pointer'}}>Send</div>
            </div>
        </div>
    );
}

export default Post;