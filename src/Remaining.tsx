import type {ReactNode} from 'react';
import {Head,Icon} from './PartOne';

function Point({children}:{children:ReactNode}){return <div className="r-conclusion"><span>核心观点</span><p>{children}</p></div>}
function Panel({children,accent=false,className=''}:{children:ReactNode;accent?:boolean;className?:string}){return <section className={`n-panel ${accent?'n-panel-accent':''} ${className}`}>{children}</section>}
function List({items}:{items:ReactNode[]}){return <ul className="n-list">{items.map((item,i)=><li key={i}>{item}</li>)}</ul>}
function Flow({items}:{items:string[]}){return <div className="n-flow">{items.map((item,i)=><span className="n-flow-cell" key={item}>{i>0&&<b aria-hidden="true">→</b>}<span>{item}</span></span>)}</div>}
const topics=['五个基本概念','GitHub 代码云盘','AI 程序员与工具','前台与后台','远程电脑','网站专属网址','网站持续更新','连接 AI 模型','两条上线路线'];
const preparations=[['购买服务器','选择云服务商和服务器配置。'],['操作系统','通常使用 Linux。'],['运行环境','根据项目安装 Node.js、Python 等。'],['部署程序','将开发好的工具运行起来。'],['配置访问','设置网络、安全及 HTTPS 等必要内容。']];
const tools=[['ChatGPT / Codex','适合开发、修改和持续维护网页与软件项目。'],['Claude Code','专业 AI 编程工具，可用于复杂代码项目的开发与调试。'],['WorkBuddy','国内 AI 工作与开发工具，可以探索自然语言开发应用。'],['Coze','提供一站式开发环境，适合快速验证工具想法。']];

export function Remaining({page}:{page:number}){return <section className={`redesigned-slide lesson-slide n-slide n-page-${page}`} aria-labelledby="slide-title">
<div className="r-chapter"><span>第三部分：Vibe Coding 从开发到上线</span><b>{topics[page]}</b></div>
{page===0&&<>
  <Head title={<>从开发到上线，<em>需要准备什么？</em></>} sub="从代码开发到正式上线，需要了解的几个基本概念。"/>
  <div className="n-body n-overview">
    <p>开发一个网页工具，可以先理解五件事：</p>
    <div className="n-concepts">{[
      ['代码存哪里？','GitHub','自带版本管理的代码云盘。','library'],
      ['谁来写代码？','Vibe Coding','让 AI 程序员帮你干活。','skill'],
      ['网站怎么工作？','前端与后端','网站的前台和后台。','image'],
      ['程序在哪里运行？','服务器','一台长期在线的远程电脑。','server'],
      ['别人怎么访问？','域名','网站的专属网址。','strategy']
    ].map(([question,name,description,icon],i)=><section className="n-concept" key={name}><span className="n-index">{String(i+1).padStart(2,'0')}</span><span className="n-question">{question}</span><h2><Icon kind={icon} size={28}/>{name}</h2><p>{description}</p></section>)}</div>
  </div>
  <Point>从一个想法，到一个别人也能使用的网站。</Point>
</>}
{page===1&&<>
  <Head title={<>GitHub：<em>自带版本管理的代码云盘</em></>} sub="代码放云端，换台电脑也能继续开发。"/>
  <div className="n-body n-github">
    <div className="n-intro"><h3>可以把 GitHub 理解成专门存放代码的云盘</h3><p>它和普通云盘有些相似，但更擅长管理程序项目和代码版本。</p></div>
    <div className="n-github-columns">
      <Panel><div className="n-section-heading"><Icon kind="library"/><h2>三个核心作用</h2></div><div className="n-core-roles">{[
        ['云端保存','将项目代码保存在远程仓库，降低只存放在本地的风险。'],
        ['跨设备同步','公司电脑与家里电脑可以继续开发同一个项目。'],
        ['版本管理','记录每次修改，出现问题时可以恢复之前的版本。']
      ].map(([title,description])=><div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div></Panel>
      <Panel accent><div className="n-section-heading"><Icon kind="skill"/><h2>三个常见操作</h2></div><div className="n-commands">{[
        ['Commit','记录一次代码修改。'],['Push','把本地提交推送到 GitHub。'],['Pull','从 GitHub 获取并整合更新。']
      ].map(([title,description])=><div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div></Panel>
    </div>
  </div>
  <Point>建议先建立 GitHub 仓库，再开始开发项目。</Point>
</>}
{page===2&&<>
  <Head title={<>Vibe Coding：<em>请一个 AI 程序员帮你干活</em></>} sub="你提出需求、检查结果，AI 帮你编写、修改和调试代码。"/>
  <div className="n-body n-vibe">
    <div className="n-intro n-vibe-intro"><h3>不需要自己逐行编写代码</h3><p>直接用自然语言描述想要的功能，让 AI 辅助完成程序开发。</p></div>
    <div className="n-responsibilities">
      <Panel className="n-role"><h2>人负责：</h2><List items={['提出需求，明确功能和使用场景。','检查效果，提出修改意见。','测试功能，确认是否符合要求。']}/></Panel>
      <Panel accent className="n-role"><h2>AI 负责：</h2><List items={['编写程序代码。','修改页面与功能。','定位和修复代码问题。','协助运行和测试项目。']}/></Panel>
    </div>
    <section className="n-tools"><h2>常用 Vibe Coding 工具</h2><div className="n-tool-grid">{tools.map(([title,description])=><Panel key={title}><h3>{title}</h3><p>{description}</p></Panel>)}</div></section>
  </div>
  <Point>你不一定要会写代码，但需要知道自己想做什么，以及如何检查 AI 的工作成果。</Point>
</>}
{page===3&&<>
  <Head title={<>前端与后端：<em>网站的前台和后台</em></>} sub="一个负责用户看到的界面，一个负责背后的处理。"/>
  <div className="n-body n-frontend">
    <div className="n-equal-panels">
      <Panel><div className="n-section-heading"><Icon kind="image"/><h2>前端 Frontend = 前台</h2></div><p>用户能够直接看到、点击和操作的部分。</p><span className="n-label">例如：</span><List items={['页面布局和视觉设计','按钮、输入框、菜单','图片上传与结果展示','页面交互效果']}/></Panel>
      <Panel accent><div className="n-section-heading"><Icon kind="skill"/><h2>后端 Backend = 后台</h2></div><p>用户不一定能直接看到，但负责处理业务的程序。</p><span className="n-label">例如：</span><List items={['用户登录与权限管理','数据保存与读取','文件和业务逻辑处理','安全调用 AI 模型接口']}/></Panel>
    </div>
    <section className="n-example"><h3>举个例子：AI 生图工具</h3><p>用户在<strong>前端</strong>输入提示词、点击生成；<strong>后端</strong>接收请求、调用 AI 模型，再把生成结果返回前端展示。</p></section>
  </div>
  <Point>前端负责交互，后端负责处理。简单工具不一定需要独立后端。</Point>
</>}
{page===4&&<>
  <Head title={<>服务器：<em>一台 24 小时在线的远程电脑</em></>} sub="让网站不依赖自己的电脑，也能持续运行。"/>
  <div className="n-body n-server">
    <h3>本地电脑与云服务器有什么区别？</h3>
    <div className="n-equal-panels n-computers">
      <Panel><Icon kind="computer" size={36}/><div><h2>本地电脑</h2><p>适合开发、测试程序。依赖本机运行的服务，在电脑关机后通常就无法继续访问。</p></div></Panel>
      <Panel accent><Icon kind="server" size={36}/><div><h2>云服务器</h2><p>可以理解为向腾讯云、阿里云等平台租用一台远程电脑，用来运行程序，让其他人通过网络访问。</p></div></Panel>
    </div>
    <h3>第一次使用服务器，需要准备什么？</h3>
    <ol className="n-preparations">{preparations.map(([title,description],i)=><li key={title}><span className="n-index">{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
  </div>
  <Point>服务器就是网站长期在线运行的地方，基础环境配置完成后可以继续复用。</Point>
</>}
{page===5&&<>
  <Head title={<>域名：<em>给网站一个专属网址</em></>} sub="让别人不用记复杂的服务器地址，也能方便地访问网站。"/>
  <div className="n-body n-domain">
    <section className="n-domain-left">
      <div className="n-address"><h3>域名就是网站的网址</h3><div><span className="n-label">例如：</span><strong>aitalk.17design.fun</strong></div><p>用户只需要在浏览器输入网址，就可以访问对应的网站。</p></div>
      <Panel className="n-subdomains"><h3>一个主域名，可以创建多个子域名</h3><p>例如购买一个主域名后，可以根据需要配置：</p><div className="n-domain-rows">{[['design','设计工具'],['image','AI 生图'],['video','AI 视频'],['tools','效率工具']].map(([prefix,purpose])=><div key={prefix}><code><strong>{prefix}</strong>.example.com</code><span>{purpose}</span></div>)}</div><p className="n-note">不需要每开发一个小工具，就重新购买一个独立的主域名。</p></Panel>
    </section>
    <Panel accent className="n-icp"><div className="n-section-heading"><Icon kind="file"/><h2>什么是 ICP 备案？</h2></div><p>可以简单理解为：<strong>在中国大陆开展网站服务所需办理的合规登记手续。</strong></p><div className="n-icp-rules"><div className="n-icp-condition"><span className="n-label">中国大陆境内</span><p>如果使用<strong>中国大陆境内服务器</strong>提供网站服务，通常需要先完成 ICP 备案。</p></div><div className="n-icp-condition"><span className="n-label">境外</span><p>如果使用<strong>境外服务器</strong>，一般不需要办理中国大陆 ICP 备案，但仍需要遵守适用的法律及平台规则。</p></div></div></Panel>
  </div>
  <Point>服务器负责运行网站，域名负责让别人找到网站。</Point>
</>}
{page===6&&<>
  <Head title={<>自动部署：<em>一次配置，网站持续更新</em></>} sub="将重复的发布操作交给自动化流程。"/>
  <div className="n-body n-deployment">
    <div className="n-pipeline n-pipeline-before"><h3>以前：手动更新网站</h3><Flow items={['修改代码','上传到服务器','重新部署','检查是否成功']}/></div>
    <div className="n-pipeline n-pipeline-after"><h3>现在：自动部署</h3><Flow items={['修改代码','Push 到 GitHub','自动执行部署','网站更新']}/></div>
    <div className="n-deployment-notes"><Panel accent><h2>GitHub Actions</h2><p>可以理解为一个自动化工作流程。</p><p>提前设置好规则，之后每次将新代码推送到指定分支，就可以自动执行构建、测试和部署任务。</p></Panel><Panel><h2>核心优势：</h2><List items={['减少反复上传代码的操作。','降低人工部署的遗漏风险。','统一网站更新流程。','可以查看部署记录和失败日志。']}/></Panel></div>
  </div>
  <Point>程序修改完成后，不需要每次都重复执行相同的上线操作。</Point>
</>}
{page===7&&<>
  <Head title={<>API：<em>让自己的工具连接 AI 模型</em></>} sub="网站可以通过 API 调用其他平台提供的 AI 能力。"/>
  <div className="n-body n-api">
    <div className="n-intro"><h3>API 是什么？</h3><p>可以把 API 理解为<strong>不同软件之间的连接接口</strong>。</p><p>例如我们开发了一个 AI 生图网页，但图片不是网页自己生成的，而是通过 API 调用了外部 AI 生图模型。</p></div>
    <section className="n-api-process"><h3>基本流程</h3><Flow items={['用户输入提示词','网页发送请求','API 调用 AI 模型','返回生成结果']}/></section>
    <div className="n-api-details"><section className="n-api-methods"><h3>两种常见调用方式</h3><div className="n-equal-panels"><Panel><h3>官方 API</h3><p>直接连接模型服务商提供的接口。</p></Panel><Panel><h3>第三方 API 中转</h3><p>通过第三方平台转发请求，部分平台还提供多模型接口管理。</p></Panel></div></section><Panel accent className="n-api-key"><h3>API Key 是什么？</h3><p>调用接口时使用的身份凭证。</p><p><strong>需要注意：API Key 应安全保存在服务端，不能直接暴露在公开网页或代码仓库中。</strong></p></Panel></div>
  </div>
  <Point>AI 帮我们开发网站，API 则让开发出来的网站能够使用 AI 模型。</Point>
</>}
{page===8&&<>
  <Head title={<>Cloudflare：<em>不买服务器，也能让简单工具上线</em></>} sub="对于部分网页项目，可以使用托管平台简化部署。"/>
  <div className="n-body n-cloudflare">
    <div className="n-route-columns">
      <Panel className="n-self-route"><h2>自主部署</h2><p>前面介绍的是自主服务器部署，<span className="n-inline-label">需要准备：</span></p><List items={['GitHub 代码库','云服务器','运行环境','域名与必要的备案','程序部署与维护']}/><div className="n-route-path"><span className="n-label">两条常见路线</span><Flow items={['GitHub','云服务器','自有域名','网站上线']}/></div></Panel>
      <Panel accent className="n-hosted-route"><h2>Cloudflare 托管</h2><p>如果只是一个简单的网页工具呢？可以考虑使用 <strong>Cloudflare Pages</strong>。</p><span className="n-label">主要优势：</span><List items={['可以在免费额度内使用。','不需要自行购买独立云服务器。','可以直接使用平台提供的网址。','与 GitHub 集成方便。','GitHub 更新代码后，可以自动构建和部署网站。']}/><div className="n-route-path"><Flow items={['GitHub','Cloudflare Pages','平台网址','网站上线']}/></div></Panel>
    </div>
    <section className="n-scope"><span className="n-label">适用范围：</span><p>适合静态网站及兼容平台环境的轻量网页应用。复杂后端、特殊运行环境或长时间运行任务可能需要其他方案，中国大陆访问体验也应提前测试。</p></section>
  </div>
  <Point>不必一开始就购买服务器和域名，也可以先把自己的第一个网页工具发布出去。</Point>
</>}
</section>}
