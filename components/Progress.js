import 'antd/dist/antd.css'
import '../static/styles/pages/comm.css'
import React, { useState, useRef, useEffect } from 'react'

const progress = () => {
    const progressRef = useRef(null);
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(!progressRef.current) return
            progressRef.current.style.width = +(scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)).toFixed(2) * 100 + '%'
        })
    }, [])
    return (
        <div className="progress-indicator_inner" ref={progressRef}></div>
    )
}
export default progress