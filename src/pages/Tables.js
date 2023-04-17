import { Row, Col, Card, Radio, Table, Upload, message, Progress, Button, Avatar, Typography, Tooltip} from "antd";
import { ToTopOutlined ,InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face2 from "../assets/images/face-2.jpg";
import pencil from "../assets/images/pencil.svg";
import moment from "moment";
import axios from "axios";
axios.defaults.withCredentials = true
const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start



const data = [
  {
    key: "1",
    userName: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Michael John</Title>
            <p>michael@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    role: (
      <>
        <div className="author-info">
          <Title level={5}>Manager</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  }
];
// project table start
const project = [
  {
    title: "COMPANIES",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "BUDGET",
    dataIndex: "age",
  },
  {
    title: "STATUS",
    dataIndex: "address",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
];



const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Spotify Version</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$14,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={30} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Progress Track</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$3,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={10} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Jira Platform Errors</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">Not Set</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">done</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={100} size="small" format={() => "done"} />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Launch new Mobile App</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$20,600</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress
            percent={50}
            size="small"
            status="exception"
            format={() => "50%"}
          />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Web Dev</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$4,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={80} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Redesign Online Store</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$2,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={0} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },
];




const Tables = () => {
  const columns = [
    {
      title: "USER",
      dataIndex: "userName",
      key: "name",
      width: "32%",
      render: (_, item) => (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={`${process.env.REACT_APP_API_URL}${item.userImageSrc}`}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{item.userName}</Title>
              <p>{item.email}</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "function",
    },
  
    {
      title: "STATUS",
      key: "status",
      dataIndex: "online",
      render: (_, item) => (
        <>
          <Button type="primary" className={item.online ? "tag-primary" : "tag-badge"} >
            {item.online ? "Online" : "Offline"}
          </Button>
        </>
      )
    },
    {
      title: "Registered",
      key: "employed",
      dataIndex: "employed",
      render: (_, item) => (
        <>
          {moment(item.dateRegister).format("MMM Do YYYY")}
        </>
      )
    },
    {
      title: "Action",
      key: "employed",
      dataIndex: "employed",
      render: (_, item) => (
        <div className="ant-employed">
          {/* <a href={`${"https://dashboard.stripe.com/test/payments/"}${item.paymentID}`}>Refund</a> */}
          <span style={{cursor:"pointer"}} onClick={()=>handlePostRefund(item.orderID)}>Refund</span>
        </div>
      )
    }
  ];

  const [data, setData] = useState([])

  const handlePostRefund =async(id)=>{

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/payments/refund/`+id,
      withCredentials:true
    })
    .then((res)=>{
      if(res.status=== 200){
        let dataCopy = JSON.parse(JSON.stringify(data));
        dataCopy = dataCopy.filter((item)=>item.orderID !== id)
        
        setData(dataCopy)
      }
      console.log(res)
    })
  
  }
  

  useEffect(() => {
    axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + '/api/admin/alluser',
      withCredentials: true
    })
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })

  }, [])

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={ <span> Refund <Tooltip title="Please Login to Stripe Dashboard before use this table"><InfoCircleOutlined style={{marginRight:"10px",cursor:"pointer"}} /></Tooltip>  </span> }
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  rowKey={(product) => product.id}
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 ,position:["bottomCenter"]}}
                  className="ant-border-space"
                />
              </div>
            </Card>

            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={ <span> Cash Withdrawal <Tooltip title="Cash withdrawal"><InfoCircleOutlined style={{marginRight:"10px",cursor:"pointer"}} /></Tooltip>  </span> }
              // extra={
              //   <>
              //     <Radio.Group onChange={onChange} defaultValue="all">
              //       <Radio.Button value="all">All</Radio.Button>
              //       <Radio.Button value="online">ONLINE</Radio.Button>
              //       <Radio.Button value="store">STORES</Radio.Button>
              //     </Radio.Group>
              //   </>
              // }
            >
              <div className="table-responsive">
              {/* <Table
                  rowKey={(product) => product.id}
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 ,position:["bottomCenter"]}}
                  className="ant-border-space"
                /> */}
              </div>
              <div className="uploadfile pb-15 shadow-none">
                {/* <Upload {...formProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to Upload
                  </Button>
                </Upload> */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
