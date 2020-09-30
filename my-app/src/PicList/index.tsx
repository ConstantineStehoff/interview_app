import React, { useState, useEffect } from 'react';
import {Spin, List, Card, Layout} from 'antd';
import PicModel from './models/PicModel';
import PicListService from './services/picListService';
import { URL } from '../common/constants';

const picListService = new PicListService();

interface PicListProps {}

const PicList: React.FC<PicListProps> = () => {
    const { Header, Content, Footer } = Layout;
    const [loading, setLoading]  = useState<Boolean>(true);
    const [pics, setPics] = useState<PicModel[]>([]);
    useEffect(() => {
        const getData = async () => { 
            const response:PicModel[] = await picListService.getData(URL);
            setPics(response);
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <Layout>
            {loading && (<Spin size="large" /> )}
            {pics.length > 0 && (
                <>
                    <Header className="site-layout-bg"><h1>List of pictures</h1></Header>
                    <Content className="container">
                        <List 
                            itemLayout="vertical"
                            size="default"
                            pagination={{
                                defaultCurrent: 10
                            }}
                            dataSource={pics}
                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                >
                                    <div className="job-listing-card">
                                        <Card title={item.title}>
                                            <a href={item.url}>
                                                <img
                                                    width={150}
                                                    alt={item.title}
                                                    src={item.thumbnailUrl}
                                                />
                                            </a>
                                        </Card>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Content>
                    <Footer><span>Footer 2020</span></Footer>
                </>
            )}
        </Layout>
    )
}

export default PicList;