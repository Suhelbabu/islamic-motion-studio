import React from 'react';
import {AbsoluteFill, Audio, Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

const scenes = [
 {title:'THE FIVE PILLARS OF ISLAM', sub:'Islam ke paanch buniyadi sutoon', voice:'Islam ke paanch buniyadi sutoon, ek Muslim ki zindagi ki rehnumai karte hain.', bg:['#071b3b','#11a6a6'], icon:'☪', label:'FAITH • WORSHIP • COMMUNITY'},
 {title:'1. SHAHADA', sub:'Allah ki wahdaniyat aur Muhammad ﷺ ki risalat par imaan', voice:'Pehla hai Shahada. Iska matlab hai, Allah ek hai aur Muhammad sallallahu alaihi wasallam uske Rasool hain.', bg:['#123c69','#17a589'], icon:'☪', label:'DECLARATION OF FAITH'},
 {title:'2. SALAH', sub:'Rozana paanch waqt ki namaz', voice:'Doosra hai Salah, yaani rozana paanch waqt ki namaz. Yeh Allah se talluq mazboot karti hai.', bg:['#1a2458','#7b4397'], icon:'۞', label:'FIVE DAILY PRAYERS'},
 {title:'3. ZAKAT', sub:'Zarooratmandon ki madad ke liye maal ka hissa', voice:'Teesra hai Zakat. Apne maal ka muqarrar hissa zarooratmand logon ko dena, taaki madad aur insaaf badhe.', bg:['#0f5132','#b8860b'], icon:'♡', label:'GIVING • COMPASSION'},
 {title:'4. SAWM', sub:'Ramzan mein subah se maghrib tak roza', voice:'Chautha hai Sawm, yaani Ramzan ke mahine mein roza. Yeh sabr, shukr aur apne nafs par qaboo sikhata hai.', bg:['#3d164f','#c05b25'], icon:'☾', label:'PATIENCE • GRATITUDE'},
 {title:'5. HAJJ', sub:'Istitaat ho to zindagi mein ek baar Makkah ka Hajj', voice:'Paanchwa hai Hajj. Jo sehat aur paison se istitaat rakhta ho, woh zindagi mein ek baar Makkah ka Hajj karta hai.', bg:['#122b36','#d49a22'], icon:'▣', label:'UNITY • PILGRIMAGE'},
];
const PillarScene: React.FC<{i:number}> = ({i}) => {
 const f=useCurrentFrame(); const {fps}=useVideoConfig(); const s=scenes[i];
 const enter=interpolate(f,[0,18],[80,0],{extrapolateRight:'clamp'}); const zoom=interpolate(f,[0,300],[1,1.13]);
 const accent=i===0?'#ffd166':'#ffe8a3';
 return <AbsoluteFill style={{background:`linear-gradient(150deg, ${s.bg[0]}, ${s.bg[1]})`,color:'white',fontFamily:'Arial, sans-serif',overflow:'hidden'}}>
   <AbsoluteFill style={{opacity:.18, transform:`translateY(${Math.sin(f/18)*14}px) scale(${zoom})`}}><svg viewBox="0 0 1080 1920" width="100%" height="100%"><defs><pattern id="stars" width="110" height="130" patternUnits="userSpaceOnUse"><circle cx="20" cy="30" r="3" fill="#fff"/><circle cx="80" cy="90" r="2" fill="#fff"/></pattern></defs><rect width="1080" height="1920" fill="url(#stars)"/><circle cx="850" cy="260" r="260" fill="none" stroke={accent} strokeWidth="3"/><circle cx="850" cy="260" r="210" fill="none" stroke={accent} strokeWidth="2"/></svg></AbsoluteFill>
   <div style={{position:'absolute',top:80,left:65,right:65,display:'flex',justifyContent:'space-between',fontSize:24,letterSpacing:4,color:accent,fontWeight:700}}><span>ISLAM • 101</span><span>0{i+1}/05</span></div>
   <div style={{position:'absolute',top:260+enter,left:0,right:0,textAlign:'center',fontSize:210,color:accent,textShadow:'0 12px 35px #0008',transform:`rotate(${Math.sin(f/24)*3}deg)`}}>{s.icon}</div>
   <div style={{position:'absolute',top:690+enter,left:55,right:55,textAlign:'center',fontSize:i===0?70:76,lineHeight:1.08,fontWeight:900,letterSpacing:1,textShadow:'0 7px 0 #0007'}}>{s.title}</div>
   <div style={{position:'absolute',top:930+enter,left:90,right:90,textAlign:'center',fontSize:38,lineHeight:1.35,color:'#fff7df',fontWeight:600}}>{s.sub}</div>
   <div style={{position:'absolute',top:1190,left:100,right:100,height:4,background:'#ffffff55'}}><div style={{height:'100%',width:`${Math.min(100,f/3)}%`,background:accent}}/></div>
   <div style={{position:'absolute',top:1230,left:70,right:70,textAlign:'center',fontSize:24,letterSpacing:5,color:accent,fontWeight:700}}>{s.label}</div>
   <div style={{position:'absolute',bottom:205,left:45,right:45,textAlign:'center',fontSize:31,lineHeight:1.25,fontWeight:700,color:'white',textShadow:'0 3px 8px #000',background:'#06152dcc',padding:'22px 18px',borderRadius:20}}>{s.voice}</div>
   <div style={{position:'absolute',bottom:90,left:0,right:0,textAlign:'center',fontSize:22,color:'#ffffffb8'}}>Learn • Reflect • Practice</div>
 </AbsoluteFill>
};
export const IslamicPillars: React.FC = () => <AbsoluteFill>
 {scenes.map((s,i)=><Sequence key={i} from={i*300} durationInFrames={300}><PillarScene i={i}/><Audio src={staticFile(`audio/voice${i+1}.wav`)} volume={1}/></Sequence>)}
 <Audio src={staticFile('audio/music.wav')} volume={0.18}/>
 <Audio src={staticFile('audio/soft-whoosh.wav')} volume={0.20}/>
 </AbsoluteFill>;
