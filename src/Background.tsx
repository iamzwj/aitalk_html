import {useEffect, useRef, useState} from 'react';

/** A small, frequent-keyframe encode keeps interactive seeking inexpensive. */
export function Background(){
  const video=useRef<HTMLVideoElement>(null);
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    const v=video.current!;
    let target=0,previousX:number|undefined,raf=0,lastSeek=0;
    const move=(event:MouseEvent)=>{
      if(previousX!==undefined&&Number.isFinite(v.duration)){
        target=Math.max(0,Math.min(v.duration-.05,target+(event.clientX-previousX)/innerWidth*.8*v.duration));
      }
      previousX=event.clientX;
    };
    const frame=(now:number)=>{
      if(!document.hidden&&v.readyState>=2&&!v.seeking&&now-lastSeek>=33&&Math.abs(target-v.currentTime)>.025){
        v.currentTime=v.currentTime+(target-v.currentTime)*.45;
        lastSeek=now;
      }
      raf=requestAnimationFrame(frame);
    };
    window.addEventListener('mousemove',move,{passive:true});
    raf=requestAnimationFrame(frame);
    return()=>{window.removeEventListener('mousemove',move);cancelAnimationFrame(raf);};
  },[]);
  return <><div className="fallback"/><img className={ready?"background-poster loaded":"background-poster"} src="/media/hero-poster.jpg" alt="" aria-hidden="true"/><video ref={video} className={ready?'backdrop ready':'backdrop'} src="/media/hero-scrub.mp4" poster="/media/hero-poster.jpg" muted playsInline preload="auto" onLoadedData={()=>setReady(true)} aria-hidden="true"/></>;
}
