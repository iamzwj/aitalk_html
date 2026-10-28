import {useLayoutEffect,useRef,useState} from 'react';
import MicroSlats from './MicroSlats';

export function ContentBackground({page}:{page:number}){
  const root=useRef<HTMLDivElement>(null);
  const [color,setColor]=useState('#38ff8e');
  useLayoutEffect(()=>{
    if(root.current)setColor(getComputedStyle(root.current).getPropertyValue('--dp-color-accent').trim());
  },[page]);
  return <div ref={root} className="content-background" aria-hidden="true" data-theme-color={color}>
    <MicroSlats preset="swell" color={color} glintColor={color} backgroundColor="#020303" slatWidth={10} slatHeight={25} gap={3} roundness={0.75} interactive cursorStrength={1} cursorSize={40} swirl={0} trail={1.4} lean={0} intro speed={0.4}/>
  </div>;
}
