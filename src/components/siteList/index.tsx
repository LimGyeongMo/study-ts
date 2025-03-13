import React from "react";
import { List, Card } from "antd";
import { useRecoilValue } from "recoil";
import { studyListState, Site } from "../../stores/studyList/atom";

const SiteList: React.FC = () => {
    const sites: Site[] = useRecoilValue(studyListState);

    return (
        <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={sites}
            renderItem={(site: Site) => (
                <List.Item>
                    <Card
                        title={site.title}
                        extra={
                            <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                방문하기
                            </a>
                        }
                    >
                        <p>{site.description}</p>
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default SiteList;
