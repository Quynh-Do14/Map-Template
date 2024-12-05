import React from 'react'
import MainLayout from '../../infrastructure/Layout/Client-Layout'
import "../../assets/css/page/File.css"
import { Col, Row } from 'antd';
const maps = [
    {
        id: 1,
        title: "Bản đồ lượng mưa trung bình nửa cuối tháng 11/2022 tỉnh Ninh Thuận tỉ lệ 1: 50.000",
        imageUrl: "http://103.130.212.145:42521/api/public/luong_mua_tb/15_30_11.jpg",
    },
    {
        id: 2,
        title: "Bản đồ lượng mưa trung bình nửa đầu tháng 11/2022 tỉnh Ninh Thuận tỉ lệ 1: 50.000",
        imageUrl: "http://103.130.212.145:42521/api/public/luong_mua_tb/15_30_11.jpg",
    },
    {
        id: 3,
        title: "Bản đồ lượng mưa trung bình nửa cuối tháng 10/2022 tỉnh Ninh Thuận tỉ lệ 1: 50.000",
        imageUrl: "http://103.130.212.145:42521/api/public/luong_mua_tb/15_30_11.jpg",
    },
    {
        id: 3,
        title: "Bản đồ lượng mưa trung bình nửa cuối tháng 10/2022 tỉnh Ninh Thuận tỉ lệ 1: 50.000",
        imageUrl: "http://103.130.212.145:42521/api/public/luong_mua_tb/15_30_11.jpg",
    },
    // Add more maps as needed
];
const PDFPage = () => {
    return (
        <MainLayout>
            <div className="map-list">
                <h1>Danh sách bản đồ chuyên đề</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm" />
                </div>
                <Row gutter={[20, 20]}>
                    {maps.map((map) => (
                        <Col span={6} key={map.id}>
                            <div className="map-card">
                                <img src={map.imageUrl} alt={map.title} />
                                <h3>{map.title}</h3>
                                <p>Bản đồ chuyên đề</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </MainLayout >
    )
}

export default PDFPage