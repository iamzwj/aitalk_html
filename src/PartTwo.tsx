import {Head,Icon} from './PartOne';
const captions=['理解 Vibe Coding','Coze 一站式开发','从 Coze 到 Codex'];
function Point({children}:{children:React.ReactNode}){return <div className="r-conclusion"><span>核心观点</span><p>{children}</p></div>}
export function PartTwo({page}:{page:number}){return <section className={'redesigned-slide part-two-slide two-page-'+page} aria-labelledby="slide-title"><div className="r-chapter"><span>第二部分：Vibe coding 探索</span><b>{captions[page]}</b></div>
{page===0&&<><Head title={<>什么是 <em>Vibe Coding？</em></>} sub="通过自然语言与 AI 协作，完成软件或网页工具的开发、修改和调试。"/><div className="two-definition"><div className="two-compare"><div className="two-compare-head"><span>传统编程</span><strong>Vibe Coding</strong></div>{[['需要掌握编程语言','不必先掌握代码'],['自己编写代码','用自然语言描述需求'],['自己编写、修改程序','AI 生成、协助修改'],['人进行测试和验收','人仍需要测试和验收']].map(([a,b],i)=><div className={'two-compare-row '+(i===3?'human-check':'')} key={a}><span>{a}</span><span>{b}</span></div>)}</div><aside className="two-example"><div className="two-example-label"><Icon kind="text" size={25}/><span>一个简单的需求</span></div><blockquote>“帮我做一个 xxx 工具，要实现 xxx 功能，页面结构是 xxx 等等。”</blockquote><div className="two-role"><Icon kind="skill" size={28}/><p><strong>你想要什么，就跟 AI 说什么</strong><span>测试与验收，仍由人负责</span></p></div></aside></div><Point>代码可以让 AI 写，但需求判断、测试和验收仍由人负责。</Point></>}
{page===1&&<>
<Head title={<>我的第一站：<em>Coze，一站式开发平台</em></>} sub="AI 编程、代码管理、服务器、域名，平台已经帮你准备好了。"/>
<div className="coze-story">
  <h3>为什么最开始选择 Coze？</h3>
  <div className="coze-map" aria-label="Coze 连接 AI 编程、项目与代码管理、云端运行环境和访问网址四项能力">
    <section className="coze-node coze-node-ai"><div className="coze-node-title"><span>01</span><Icon kind="skill"/><h3>自带 AI 编程能力</h3></div><p>通过自然语言描述需求，让 AI 帮助开发网站和应用，不需要自己编写复杂代码。</p></section>
    <section className="coze-node coze-node-code"><div className="coze-node-title"><span>02</span><Icon kind="library"/><h3>自带项目与代码管理</h3></div><p>平台内提供项目管理能力，不需要一开始就自己建立 GitHub 仓库。</p></section>
    <div className="coze-hub"><strong>Coze</strong><span>一站式开发平台</span></div>
    <section className="coze-node coze-node-cloud"><div className="coze-node-title"><span>03</span><Icon kind="server"/><h3>自带云端运行环境</h3></div><p>不需要购买和配置自己的云服务器，平台提供托管与运行环境。</p></section>
    <section className="coze-node coze-node-url"><div className="coze-node-title"><span>04</span><Icon kind="strategy"/><h3>自带访问网址</h3></div><p>不需要单独购买域名，可以使用平台提供的地址发布和访问应用。</p></section>
  </div>
</div>
<Point>核心优势：开箱即用，大幅降低非程序员的开发与上线门槛。</Point>
</>}
{page===2&&<>
<Head title={<>从 Coze 到 Codex：<em>为什么我换了开发方式？</em></>} sub="Coze 让我快速入门，但随着项目越来越复杂，我开始需要更强的编程能力和更高的自主控制权。"/>
<div className="switch-story">
  <section className="switch-side switch-limits"><h2>遇到的两个主要瓶颈</h2><div className="switch-limit-list">
    <section><span className="switch-index">01</span><div><h3>复杂项目的开发效率不足</h3><p>在我的实际使用中，Coze 的编程能力面对复杂功能、多轮修改时，效果不够理想。</p><p>经常出现需求理解不准确、反复调试、响应较慢等情况，影响开发效率。</p></div></section>
    <section><span className="switch-index">02</span><div><h3>运行环境与数据管理不够自主</h3><p>一站式托管虽然省心，但平台内部的运行环境相对封闭。</p><p>对于服务器配置、数据存储和部署方式，缺少足够直接的控制，不适合我希望长期自主维护的项目。</p></div></section>
  </div></section>
  <div className="switch-arrow" aria-hidden="true"><Icon kind="arrow" size={38}/></div>
  <section className="switch-side switch-benefits"><h2>为什么选择 Codex？</h2><div className="switch-benefit-list">
    <section><Icon kind="skill"/><div><h3>更强的专业编程能力</h3><p>在我的项目实践中，Codex 更擅长理解复杂需求、跨文件修改和持续调试。</p></div></section>
    <section><Icon kind="library"/><div><h3>更自主的项目管理</h3><p>使用 GitHub 独立管理代码与版本，不再主要依赖单个平台的项目环境。</p></div></section>
    <section><Icon kind="server"/><div><h3>更可控的运行与部署</h3><p>根据项目需要自行选择服务器、配置运行环境、管理数据和发布方式。</p></div></section>
  </div></section>
</div>
<Point>从一站式平台开发，转向专业 AI 编程 + 自主代码管理 + 自主部署。</Point>
</>}
</section>}
