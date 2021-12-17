import React, { useEffect, useState } from 'react';
import Fixed from './Fixed';
import Post from './Post';
import Profile from './Profile';

function Home(props) {
    
            return (
                <div style={{display:'flex',maxWidth:1200,margin:'auto'}}>

                    <div style={{padding:10}}>
                        <Profile/>
                        <Fixed/>
                    </div>
                    <div>
                        <Post 
                            author={{name:'Dylan Sams' ,avtar:"avtar1.jpg", title:"Software Engineer @ Google | Ex-Media.net, Amazon"}} 
                            content='Hey everyone! I am absolutely delighted to announce that I have joined Google (Warsaw) as a Software Engineer.Thanks to my community, friends, and family for supporting and encouraging me throughout the way!'
                            time='1d'
                            likeCount={300}
                        />
                        <Post 
                            author={{name:'Dylan Sams' ,avtar:"avtar1.jpg", title:"Software Engineer @ Google | Ex-Media.net, Amazon"}} 
                            content='Hey everyone! I am absolutely delighted to announce that I have joined Google (Warsaw) as a Software Engineer.Thanks to my community, friends, and family for supporting and encouraging me throughout the way!'
                            time='1d'
                            likeCount={300}
                        />
                        <Post 
                            author={{name:'Dylan Sams' ,avtar:"avtar1.jpg", title:"Software Engineer @ Google | Ex-Media.net, Amazon"}} 
                            content='Hey everyone! I am absolutely delighted to announce that I have joined Google (Warsaw) as a Software Engineer.Thanks to my community, friends, and family for supporting and encouraging me throughout the way!'
                            time='1d'
                            likeCount={300}
                        />
                        <Post 
                            author={{name:'Dylan Sams' ,avtar:"avtar1.jpg", title:"Software Engineer @ Google | Ex-Media.net, Amazon"}} 
                            content='Hey everyone! I am absolutely delighted to announce that I have joined Google (Warsaw) as a Software Engineer.Thanks to my community, friends, and family for supporting and encouraging me throughout the way!'
                            time='1d'
                            likeCount={300}
                        />
                        <Post 
                            author={{name:'Dylan Sams' ,avtar:"avtar1.jpg", title:"Software Engineer @ Google | Ex-Media.net, Amazon"}} 
                            content='Hey everyone! I am absolutely delighted to announce that I have joined Google (Warsaw) as a Software Engineer.Thanks to my community, friends, and family for supporting and encouraging me throughout the way!'
                            time='1d'
                            likeCount={300}
                        />
                    </div>
                    <div style={{padding:10}}>
                        <Profile/>
                    </div>

                    

                </div>
    );
}

export default Home;