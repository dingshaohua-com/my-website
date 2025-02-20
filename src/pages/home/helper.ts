// import holyTrinityImg from "@/assets/home/holy-trinity.webp"
// import feFwLibImg from "@/assets/home/fe-fw-lib.png"
import githubImg from "@/assets/home/github.svg"
import cnblogImg from "@/assets/home/cnblog.svg"
import vitepressImg from "@/assets/home/vitepress.webp"

// const dynamicNavbarCfg = {
//   holyTrinity: {
//     title: "前端三剑客",
//     content: "html、css、js的爱恨情仇",
//     icon: holyTrinityImg,
    
//   },
//   feFwAndLib: {
//     title: "前端框架与库",
//     content: "让你事半功倍",
//     icon: feFwLibImg,
    
//   }
// };

const dynamicNavbarCfg = [
    {
        id:'cnblog',
        label: "博客园",
        icon: cnblogImg,
        descr:'84w访问量，记录我的瞎捣鼓的零碎笔记',
        link:'https://www.cnblogs.com/dingshaohua'
    },
    {
        id:'mdoc',
        label: "系统化笔记",
        icon: vitepressImg,
        descr:'若时间充裕，我会记录一些系统化的笔记',
        link:'https://doc.dingshaohua.com'
    },
    {
        id:'github',
        label: "GitHub",
        icon: githubImg,
        descr:'这里能体现我部分的编码能力',
        link:'https://github.com/dingshaohua-com'
    },
    
];

export default dynamicNavbarCfg;