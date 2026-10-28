import {ChapterDivider} from './ChapterDivider';
import {Closing} from './Closing';
import {ContentBackground} from './ContentBackground';
import {Background} from './Background';
import GlitchText from './GlitchText';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import './typography.css';
import './third-part.css';
import './second-part.css';
import {PartOne} from './PartOne';
import {PartTwo} from './PartTwo';
import {Remaining} from './Remaining';
const SLIDES=[
  {kind:'cover',chapter:1,index:0},
  {kind:'divider',chapter:1,index:0},
  ...Array.from({length:3},(_,i)=>({kind:'one',chapter:1,index:i+1})),
  {kind:'divider',chapter:2,index:0},
  ...Array.from({length:3},(_,i)=>({kind:'two',chapter:2,index:i})),
  {kind:'divider',chapter:3,index:0},
  ...Array.from({length:9},(_,i)=>({kind:'three',chapter:3,index:i})),
  {kind:'closing',chapter:3,index:0}
];
const PAGE_COUNT=SLIDES.length;
function App(){
const [page,setPage]=useState(()=>Math.max(0,Math.min(PAGE_COUNT-1,Number(new URLSearchParams(location.search).get('page')||1)-1)));
const go=(next:number)=>{const value=Math.max(0,Math.min(PAGE_COUNT-1,next));setPage(value);const url=new URL(location.href);url.searchParams.set('page',String(value+1));history.replaceState(null,'',url);window.scrollTo(0,0);};
useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.altKey||e.ctrlKey||e.metaKey||e.target instanceof HTMLInputElement)return;if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();go(page+1);}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(page-1);}if(e.key==='Home'){e.preventDefault();go(0);}if(e.key==='End'){e.preventDefault();go(PAGE_COUNT-1);}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[page]);
const slide=SLIDES[page];
const cinematic=['cover','divider','closing'].includes(slide.kind);
const theme=slide.chapter===3?'part-three':slide.chapter===2?'part-two':'';
return <div className={`presentation ${theme} ${slide.kind==='divider'?'divider-page':''} ${slide.kind==='closing'?'closing-page':''}`}>{cinematic?<Background/>:<ContentBackground page={page}/>}<div className={cinematic?"wash":"wash content-wash"}/>
<header className="talk-header"><span>蝶发AI talk 第二期</span><time dateTime="2026-10-28">2026/10/28</time></header>
<main id="cover" className={cinematic?"hero":"hero content-page"}>{slide.kind==='cover'?<div className="hero-content"><p className="intro">以D-Gen·蝶发工作台为例</p><h1 className="main-title" data-text={'探索 Vibe Coding\n从开发到上线的实践'} aria-label="探索 Vibe Coding 从开发到上线的实践"><GlitchText mode="slices" trigger="click" interval={3000} speed={1} intensity={0.5} burstDuration={0.35} offset={7} shadowColors={['#ff0000','#00ffff']}>探索 <span className="title-accent">Vibe Coding</span><br/>从开发到上线的实践</GlitchText></h1><p className="presenter">张文杰（蝶城营销部 设计师）</p></div>:slide.kind==='divider'?<ChapterDivider chapter={slide.chapter}/>:slide.kind==='closing'?<Closing/>:slide.kind==='one'?<PartOne page={slide.index}/>:slide.kind==='two'?<PartTwo page={slide.index}/>:<Remaining page={slide.index}/>}<nav className="slide-navigation" aria-label="演示翻页"><span className="page-number" aria-label={`第 ${page+1} 页，共 ${PAGE_COUNT} 页`} aria-live="polite"><strong>{String(page+1).padStart(2,'0')}</strong><span className="page-divider">/</span><span>{String(PAGE_COUNT).padStart(2,'0')}</span></span><div className="page-actions"><button type="button" disabled={page===0} onClick={()=>go(page-1)} aria-label="上一页"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true"><path d="M20 9H2m0 0 7-7M2 9l7 7" stroke="currentColor" strokeWidth="1.5"/></svg></button><button type="button" disabled={page===PAGE_COUNT-1} onClick={()=>go(page+1)} aria-label="下一页"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true"><path d="M2 9h18m0 0-7-7m7 7-7 7" stroke="currentColor" strokeWidth="1.5"/></svg></button></div></nav></main></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
