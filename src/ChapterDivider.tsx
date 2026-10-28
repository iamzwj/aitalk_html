import GlitchText from './GlitchText';

const chapters=[
  {label:'PART 01 / PRODUCT',title:'D-Gen·蝶发工作台',subtitle:'从一个生图工具，到团队 AI 工作平台'},
  {label:'PART 02 / VIBE CODING',title:'不懂代码，也能开发工具？',subtitle:'从设计师的真实开发经历，认识 Vibe Coding'},
  {label:'PART 03 / FROM CODE TO LAUNCH',title:'AI 写好了代码，然后呢？',subtitle:'从代码云盘、AI 程序员，到网站真正上线'}
];
export function ChapterDivider({chapter}:{chapter:number}){
  const item=chapters[chapter-1];
  return <div className="hero-content chapter-divider">
    <p className="divider-label">{item.label}</p>
    <h1 className="main-title" aria-label={item.title}><GlitchText mode="slices" trigger="click" interval={3000} speed={1} intensity={0.5} burstDuration={0.35} offset={7} shadowColors={['#ff0000','#00ffff']}>{item.title}</GlitchText></h1>
    <p className="divider-subtitle">{item.subtitle}</p>
  </div>;
}
