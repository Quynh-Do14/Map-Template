import React, { useEffect, useState } from 'react'
import MainLayout from '../../infrastructure/Layout/Client-Layout'
import "../../assets/css/page/File.css"
import { Col, Image, Row } from 'antd';
import pdf1 from "../../assets/images/pfd1.png"
import pdf2 from "../../assets/images/pfd2.png"

const maps = [
    {
        id: 1,
        title: "KẾT QUẢ PHÂN LOẠI RÁC THẢI NHỰA KHU VỰC THÀNH PHÓ ĐÀ NĂNG TỪ ẢNH UAV",
        imageUrl: "http://103.130.212.145:23106/z6085352572365_7b5469ef9e62e637a8e585a5a9636281.jpg",
    },
    {
        id: 2,
        title: "PHÂN VÙNG RÁC THẢI NHỰA KHU VỰC TỈNH QUẢNG NINH TỪ ẢNH UAV",
        imageUrl: "http://103.130.212.145:23106/z6085352578884_67c5770c574ad6ce71399903ea1a33a8.jpg",
    },
    {
        id: 3,
        title: "PHÂN VÙNG RÁC THẢI NHỰA KHU VỰC THÀNH PHỒ ĐÀ NẴNG TỪ ẢNH UAV",
        imageUrl: "http://103.130.212.145:23106/z6085352579849_ea46e4f8a27d0daccd4345b774e9c4e4.jpg",
    },
    {
        id: 4,
        title: "KẾT QUẢ PHÂN LOẠI RÁC THẢI NHỰA KHU VỰC TỈNH QUẢNG NINH TỪ ẢNH UAV",
        imageUrl: "http://103.130.212.145:23106/z6085352589634_c1e619ee8f9de3365f89e16f4012192b.jpg",
    },
    {
        id: 5,
        title: "PHÂN LOẠI RÁC THẢI NHỰA KHU VỰC THÀNH PHỐ ĐÀ NẴNG TỪ ẢNH UAV",
        imageUrl: pdf1,
        file: "http://103.130.212.145:23106/PL_RacThaiNhua_DaNangUAV.pdf",
    },
    {
        id: 6,
        title: "PHÂN LOẠI RÁC THẢI NHỰA KHU VỰC TỈNH QUẢNG NINH TỪ ẢNH UAV",
        imageUrl: pdf2,
        file: "http://103.130.212.145:23106/PL_RacThaiNhua_QuangNinhUAV.pdf",
    },
    // Add more maps as needed
];
const PDFPage = () => {
    const [search, setSearch] = useState<string>("");
    const [filterData, setFilterData] = useState<any[]>(maps);
    useEffect(() => {
        const result = maps.filter(item => item.title.toUpperCase().includes(search.toUpperCase()));
        setFilterData(result);
    }, [search])
    return (
        <MainLayout>
            <div className="map-list">
                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <Row gutter={[20, 20]}>
                    {filterData.map((map) => (
                        <Col span={6} key={map.id}>
                            {
                                map.file
                                    ?
                                    <a href={map.file} target='_blank'>
                                        <div className="map-card">
                                            <img src={map.imageUrl} alt={map.title} />
                                            <h3>{map.title}</h3>
                                        </div>
                                    </a>
                                    :
                                    <div className="map-card">
                                        <Image className='img' src={map.imageUrl} alt={map.title} />
                                        <h3>{map.title}</h3>
                                    </div>
                            }
                        </Col>
                    ))}
                </Row>
            </div>
        </MainLayout >
    )
}

export default PDFPage