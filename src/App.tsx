import { Layout, Typography } from "antd";
import SiteList from "./components/siteList";
const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Header
                    style={{ backgroundColor: "#1890ff", padding: "10px 20px" }}
                >
                    <Title level={3} style={{ color: "#fff", margin: 0 }}>
                        Study Sites Collection
                    </Title>
                </Header>
                <Content style={{ padding: "20px" }}>
                    <SiteList />
                </Content>
            </Layout>
        </div>
    );
};

export default App;
