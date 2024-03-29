import React,{useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import {Row, Col ,Affix ,Breadcrumb  } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Progress from '../components/Progress'
import Footer from '../components/Footer'
import '../static/styles/pages/detailed.css'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/vs2015.css';
import Tocify from '../components/tocify.tsx'

const Detailed = (props) => {
    const articleContent = props.article_content
    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function(text,level,raw) {
        const anchor = tocify.add(text,level)
        return `
            <a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n
            `;
    }
    // markdown配置
    marked.setOptions({
        renderer, 
        gfm: true,
        pedantic: false, 
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return `${hljs.highlightAuto(code).value}`;
            // return `${hljs.highlightAuto(code).value}<span class="copy-code-btn">复制</span>`;
        }
    })
    let html = marked(props.article_content);
    return (
        <>
            <Progress />
            <Head>
                <title>Detailed</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <div className="detailed-title">
                                {props.title}
                            </div>
                            <div className="list-icon center">
                                <span><CalendarOutlined />{props.addTime}</span>
                                <span><FolderOutlined /> {props.typeName}</span>
                                <span><FireOutlined /> {props.view_count}</span>
                            </div>
                            <div className="detailed-content" 
                                dangerouslySetInnerHTML = {{__html:html}}  >
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

Detailed.getInitialProps = async(context)=>{
    let id = context.query.id;
    const promise = new Promise((resolve)=>{
  
      axios(servicePath.getArticleById + id).then(
        (res)=>{
          resolve(res.data.data[0])
        }
      )
    })
  
    return await promise
  }

export default Detailed