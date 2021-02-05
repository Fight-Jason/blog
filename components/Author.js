
import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../static/styles/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="/author.jpg"  /></div>
            <div className="author-introduction">
                简述简述简述简述简述简述简述简述简述简述简述简述简述
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author