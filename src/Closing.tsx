import GlitchText from './GlitchText';

export function Closing(){
  return <div className="hero-content closing-content">
    <h1 className="main-title" aria-label="THANK YOU"><GlitchText mode="slices" trigger="click" interval={3000} speed={1} intensity={0.5} burstDuration={0.35} offset={7} shadowColors={['#ff0000','#00ffff']}>THANK <span className="title-accent">YOU</span></GlitchText></h1>
    <div className="closing-qr-row">
      <figure><div className="closing-qr-frame"><img src="/qr/feedback.png" alt="分享反馈二维码"/></div><figcaption>分享反馈</figcaption></figure>
      <figure><div className="closing-qr-frame"><img src="/qr/tip.png" alt="欢迎打赏二维码"/></div><figcaption>欢迎打赏</figcaption></figure>
    </div>
  </div>;
}
